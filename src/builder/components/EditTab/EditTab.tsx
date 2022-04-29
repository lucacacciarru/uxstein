import { FC } from 'react';
import {
  Collapsable,
  CollapsableItem,
} from '../../../_shared/components/Collapsable';
import { Attributes } from '../Attribute/Attributes';
import { BlockStyleFields } from '../BlockStyleFields/BlockStyleFields';
import { EditTabHeader } from './EditTabHeader';
import { useEditTab } from './useEditTab';

type Props = {
  selectedBlockId?: string;
};

export const EditTab: FC<Props> = ({ selectedBlockId = '' }) => {
  const { headerProps, attributesNameKeyList, blockStyle, accordionLabels } =
    useEditTab(selectedBlockId);

  return (
    <>
      <EditTabHeader {...headerProps} />
      <Collapsable defaultIndex={0}>
        <CollapsableItem name={accordionLabels.attributes}>
          <Attributes
            items={attributesNameKeyList}
            blockItemId={selectedBlockId}
          />
        </CollapsableItem>
        <CollapsableItem name={accordionLabels.style}>
          <BlockStyleFields style={blockStyle} blockItemId={selectedBlockId} />
        </CollapsableItem>
      </Collapsable>
    </>
  );
};
