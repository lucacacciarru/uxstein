import { useContext, useEffect } from 'react';
import { Layout, ReactGridLayoutProps } from 'react-grid-layout';
import { useDispatch, useSelector } from 'react-redux';
import { BlockSetup } from '../../hooks/useBlockSetup';
import { addItem } from '../../store/actions/addItem';
import { selectItem } from '../../store/actions/selected';
import { getPageSettings } from '../../store/selectors/getPageSettings';
import { populateBuilderTrigger } from '../../store/actions/populate';
import { useUrlBuilderEntity } from '../../hooks/useUrlBuilderEntity';
import { getGlobalStyle } from '../../store/selectors/getGlobalStyle';
import { updatePageSettings } from '../../store/actions/update';
import { BuilderContext } from '../BuilderContext';
import { PlaceholderGridProps } from '../PlaceholderGrid';
import { gridSettings } from '../../config/styleSettings/globals';
import { useRowHeight } from '../../hooks/useRowHeight';

export const useDroppablePage = (blockSetup: BlockSetup) => {
  const dispatch = useDispatch();
  const { entityId, entityType } = useUrlBuilderEntity();
  const layout = useSelector(getPageSettings);
  const globalStyle = useSelector(getGlobalStyle);
  const { setShowGridPlaceholder } = useContext(BuilderContext);
  const { rowHeight } = useRowHeight(globalStyle);

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
    setShowGridPlaceholder(false);
  };

  const showGridPlaceholder = () => {
    setShowGridPlaceholder(true);
  };

  const onLayoutChangeHandler = (newLayout: Layout[]) => {
    dispatch(updatePageSettings({ pageSettings: newLayout }));
    setShowGridPlaceholder(false);
  };

  const gridLayoutProps: ReactGridLayoutProps = {
    style: {
      height: '100%',
      zIndex: '11',
    },
    draggableCancel: '.options-block',
    isResizable: true,
    compactType: null,
    autoSize: false,
    isDroppable: true,
    preventCollision: true,
    isBounded: true,
    cols: gridSettings.colsNumber,
    maxRows: gridSettings.rowsNumber,
    containerPadding: [
      globalStyle.containerPaddingX,
      globalStyle.containerPaddingY,
    ],
    rowHeight: rowHeight,
    droppingItem: blockSetup.layoutSettings,
    layout,
    onDrop: onDropHandler,
    onDrag: showGridPlaceholder,
    onResize: showGridPlaceholder,
    onDragStop: onLayoutChangeHandler,
    onResizeStop: onLayoutChangeHandler,
    margin: [globalStyle.columnGap, globalStyle.rowGap],
  };

  const backgroundContainer = globalStyle.backgroundColor;

  const placeholderGridProps: PlaceholderGridProps = {
    columns: gridSettings.colsNumber,
    row: gridSettings.rowsNumber,
    px: `${globalStyle.containerPaddingX}px`,
    py: `${globalStyle.containerPaddingY}px`,
    position: 'absolute',
    top: '0',
    left: '0',
    h: '100%',
    w: '100%',
    spacingX: `${globalStyle.columnGap}px`,
    spacingY: `${globalStyle.rowGap}px`,
    zIndex: 'base',
  };

  useEffect(() => {
    dispatch(populateBuilderTrigger({ entityId: entityId || '', entityType }));
  }, [dispatch, entityId]);

  return {
    layout,
    gridLayoutProps,
    placeholderGridProps,
    backgroundContainer,
  };
};
