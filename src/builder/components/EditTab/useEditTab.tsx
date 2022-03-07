import { useSelector } from 'react-redux';
import { getGridItemById } from '../../store/selectors/getGridItemById';
import { AttributeName, GridItem } from '../../store/types';
import { blockItemSettings } from '../AddTab/blockItemSettings';

export const useEditTab = (selectedBlockId: string) => {
  const selectedBlockItem: GridItem | undefined = useSelector(
    getGridItemById(selectedBlockId),
  );

  const type = selectedBlockItem?.type || '';

  const headerProps = {
    title: type, //probably attributes will have a title value soon
    optionalSettings: blockItemSettings[type]?.optionalSettings,
  };

  const attributesNameKeyList = Object.keys(
    selectedBlockItem?.attributes || [],
  );

  return {
    headerProps,
    attributesNameKeyList: attributesNameKeyList as AttributeName[],
  };
};
