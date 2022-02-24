import { FC } from 'react';
import {
  Collapsable,
  CollapsableItem,
} from '../../../_shared/components/Collapsable';
import { EditTabHeader } from './EditTabHeader';

const mockHeaderProps = {
  title: 'Text Box',
  minSize: { b: 1, h: 2 },
  maxSize: { b: 4, h: 6 },
};

export const EditTab: FC = () => {
  return (
    <>
      <EditTabHeader {...mockHeaderProps} />
      <Collapsable defaultIndex={0}>
        <CollapsableItem name="Attributes">Various attributes</CollapsableItem>
        <CollapsableItem name="Style">
          Here modify style of block itself
        </CollapsableItem>
      </Collapsable>
    </>
  );
};
