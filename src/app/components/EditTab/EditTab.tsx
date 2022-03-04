import { FC } from 'react';
import { useSelector } from 'react-redux';
import {
  Collapsable,
  CollapsableItem,
} from '../../../_shared/components/Collapsable';
import { getGridItemById } from '../../store/selectors/getGridItemById';
import { GridItem } from '../../store/types';
import { blockItemSettings } from '../AddTab/blockItemSettings';
import { EditTabHeader } from './EditTabHeader';

type Props = {
  selectedBlockId?: string;
};

export const EditTab: FC<Props> = ({ selectedBlockId = '' }) => {
  const selectedBlockItem: GridItem | undefined = useSelector(
    getGridItemById(selectedBlockId),
  );

  const type = selectedBlockItem?.type || '';

  const headerProps = {
    title: type, //probably attributes will have a title value soon
    optionalSettings: blockItemSettings[type]?.optionalSettings,
  };

  return (
    <>
      <EditTabHeader {...headerProps} />
      <Collapsable defaultIndex={0}>
        <CollapsableItem name="Attributes">Various attributes</CollapsableItem>
        <CollapsableItem name="Style">
          Here modify style of block itself
        </CollapsableItem>
      </Collapsable>
    </>
  );
};
