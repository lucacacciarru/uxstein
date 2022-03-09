import { Layout, ReactGridLayoutProps } from 'react-grid-layout';
import { useDispatch, useSelector } from 'react-redux';
import { BlockSetup } from '../../hooks/useBlockSetup';
import { addItem } from '../../store/actions/addItem';
import { selectItem } from '../../store/actions/selected';
import { getPageSettings } from '../../store/selectors/getPageSettings';

export const useDroppablePage = (blockSetup: BlockSetup) => {
    const dispatch = useDispatch();
    const layout = useSelector(getPageSettings);

    const onDrop = (newLayout: Layout[], newBlock: Layout, _event: Event) => {
        const itemWithSettings = { ...newBlock, ...blockSetup.layoutSettings, ...blockSetup.optionalSettings };
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

    const gridLayoutProps: ReactGridLayoutProps = {
        style: {
            height: '800px',
            background: '#dadada',
        },
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
        onDrop: onDrop,
    }

    return {
        layout,
        gridLayoutProps,
    }
}