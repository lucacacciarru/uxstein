import { useTranslation } from 'react-i18next';
import { useSelectedBlock } from '../../hooks/useSelectedBlock';

export const useToolBar = () => {
    const { t } = useTranslation();
    const { clearSelection, selectedBlockId } = useSelectedBlock();
    const selectedIndex = selectedBlockId ? 1 : 0;

    const addTabLabel = t('builder.toolBar.tabLabels.add');
    const editTabLabel = t('builder.toolBar.tabLabels.edit');

    return {
        clearSelection,
        selectedBlockId,
        selectedIndex,
        addTabLabel,
        editTabLabel
    }
}