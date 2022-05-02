import { useSelector } from 'react-redux';
import { getGridItemById } from '../../store/selectors/getGridItemById';
import { AttributeName, GridItem } from '../../store/types';
import { blockItemSettings } from '../../config/blockItemSettings';
import { useTranslation } from 'react-i18next';

export const useEditTab = (selectedBlockId: string) => {
  const { t } = useTranslation();
  const selectedBlockItem: GridItem | undefined = useSelector(
    getGridItemById(selectedBlockId),
  );

  const type = selectedBlockItem?.type || '';

  const headerProps = {
    title: t(`builder.toolBar.draggableBlocksLabels.${type}`),
    optionalSettings: blockItemSettings[type]?.optionalSettings,
  };

  const attributesNameKeyList = Object.keys(
    selectedBlockItem?.attributes || [],
  );

  const blockStyle = selectedBlockItem?.style || {};

  const accordionLabels = {
    attributes: t('builder.toolBar.general.attributes'),
    style: t('builder.toolBar.general.style'),
  };

  return {
    headerProps,
    attributesNameKeyList: attributesNameKeyList as AttributeName[],
    blockStyle,
    accordionLabels,
  };
};
