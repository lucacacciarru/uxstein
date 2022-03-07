import { FC } from 'react';
import {
  Collapsable,
  CollapsableItem,
} from '../../../_shared/components/Collapsable';
import { Attributes } from '../Attribute/Attributes';
import { EditTabHeader } from './EditTabHeader';
import { useEditTab } from './useEditTab';

type Props = {
  selectedBlockId?: string;
};

export const EditTab: FC<Props> = ({ selectedBlockId = '' }) => {
  const { headerProps, attributesNameKeyList } = useEditTab(selectedBlockId);

  return (
    <>
      <EditTabHeader {...headerProps} />
      <Collapsable defaultIndex={0}>
        <CollapsableItem name="Attributes">
          <Attributes
            items={attributesNameKeyList}
            blockItemId={selectedBlockId}
          />
        </CollapsableItem>
        <CollapsableItem name="Style">
          Here modify style of block itself
        </CollapsableItem>
      </Collapsable>
    </>
  );
};
