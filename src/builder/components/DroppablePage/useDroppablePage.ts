import { useEffect } from 'react';
import { Layout, ReactGridLayoutProps } from 'react-grid-layout';
import { useDispatch, useSelector } from 'react-redux';
import { BlockSetup } from '../../hooks/useBlockSetup';
import { addItem } from '../../store/actions/addItem';
import { updatePageSettings } from '../../store/actions/updatePageSettings';
import { selectItem } from '../../store/actions/selected';
import { getPageSettings } from '../../store/selectors/getPageSettings';
import { populateBuilderTrigger } from '../../store/actions/populate';
import { useBuilderEntity } from '../../hooks/useBuilderEntity';

export const useDroppablePage = (blockSetup: BlockSetup) => {
  const dispatch = useDispatch();
  const { entityId, entityType } = useBuilderEntity();
  const layout = useSelector(getPageSettings);

  const onDropHandler = (
    newLayout: Layout[],
    newBlock: Layout,
    _event: Event,
  ) => {
    const itemWithSettings = {
      ...newBlock,
      ...blockSetup.layoutSettings,
      ...blockSetup.optionalSettings,
    };
    const pageLayoutWithSettedItem = newLayout.map(item => {
      if (item.i === newBlock.i) {
        return itemWithSettings;
      }
      return item;
    });

    const newItem = {
      layoutSettings: itemWithSettings,
      gridItemSettings: blockSetup.gridItemSettings,
    };

    dispatch(
      addItem({
        item: newItem,
        pageSettings: pageLayoutWithSettedItem,
      }),
    );
    dispatch(selectItem({ itemId: newItem.layoutSettings.i }));
  };

  const onLayoutChangeHandler = (newLayout: Layout[]) => {
    dispatch(updatePageSettings({ pageSettings: newLayout }));
  };

  const gridLayoutProps: ReactGridLayoutProps = {
    style: {
      height: '800px',
      background: '#dadada',
    },
    draggableCancel: '.delete-block',
    isResizable: true,
    compactType: null,
    autoSize: false,
    isDroppable: true,
    preventCollision: true,
    isBounded: true,
    cols: 6,
    rowHeight: 130,
    maxRows: 5,
    containerPadding: [60, 60],
    droppingItem: blockSetup.layoutSettings,
    onDrop: onDropHandler,
    onDragStop: onLayoutChangeHandler,
    onResizeStop: onLayoutChangeHandler,
  };

  useEffect(() => {
    dispatch(populateBuilderTrigger({ entityId: entityId || '', entityType }));
  }, [dispatch, entityId]);

  return {
    layout,
    gridLayoutProps,
  };
};
