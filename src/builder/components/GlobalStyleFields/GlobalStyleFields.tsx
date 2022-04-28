import { Stack } from '@chakra-ui/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { CollapsableItem } from '../../../_shared/components/Collapsable';
import { GridGapField } from './GridGapField';
import { PageBgColorField } from './PageBgColorField';

export const GlobalStyleFields: FC = () => {
  const { t } = useTranslation();
  return (
    <CollapsableItem
      name={t('builder.toolBar.general.globalStyle')}
      accordtionPanelProps={{ pb: '8' }}
    >
      <Stack spacing="6">
        <PageBgColorField />
        <GridGapField styleKey="rowGap" />
        <GridGapField styleKey="columnGap" />
      </Stack>
    </CollapsableItem>
  );
};
