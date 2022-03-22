import { Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '../../../_shared/components';

export const UploadImageBox: FC = () => {
  const { t } = useTranslation();
  return (
    <Stack align="center" justify="center" boxSize="full" color="black.50">
      <Icon name="Upload" size="10" color="" />
      <Text>{t('builder.toolBar.attributes.image.placeholder')}</Text>
    </Stack>
  );
};
