import { FC } from 'react';
import {
  Collapsable,
  CollapsableItem,
} from '../../../_shared/components/Collapsable';

export const EditTab: FC = () => {
  return (
    <>
      <Collapsable defaultIndex={0}>
        <CollapsableItem name="Attributes">Various attributes</CollapsableItem>
        <CollapsableItem name="Style">
          Here modify style of block itself
        </CollapsableItem>
      </Collapsable>
    </>
  );
};
