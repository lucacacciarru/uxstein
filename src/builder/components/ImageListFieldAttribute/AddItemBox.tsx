import { Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '../../../_shared/components';

export const AddItemBox: FC = () => {
  const { t } = useTranslation();
  return (
    <Stack align="center" justify="center" boxSize="full" color="black.50">
      <Icon name="Add" size="10" color="" />
      <Text>{t('builder.toolBar.attributes.image.addOnePlaceholder')}</Text>
    </Stack>
  );
};
