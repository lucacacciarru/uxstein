import { Stack } from '@chakra-ui/react';
import { FC } from 'react';
import {
  Collapsable,
  CollapsableItem,
} from '../../../_shared/components/Collapsable';
import { GridGapField } from './GridGapField';
import { PageBgColorField } from './PageBgColorField';

export const GlobalStyleFields: FC = () => {
  return (
    <Collapsable>
      <CollapsableItem name="Global styles">
        <Stack spacing="6">
          <PageBgColorField />
          <GridGapField styleKey="rowGap" />
          <GridGapField styleKey="columnGap" />
        </Stack>
      </CollapsableItem>
    </Collapsable>
  );
};
