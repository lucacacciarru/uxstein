import { Stack } from '@chakra-ui/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { CollapsableItem } from '../../../_shared/components/Collapsable';
import { GridGapField } from './GridGapField/GridGapField';
import { PaddingStyleField } from './PaddingStyleField/PaddingStyleField';
import { PageBgColorField } from './PageBgColorField/PageBgColorField';

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
        <PaddingStyleField styleKey="containerPaddingX" />
        <PaddingStyleField styleKey="containerPaddingY" />
      </Stack>
    </CollapsableItem>
  );
};
