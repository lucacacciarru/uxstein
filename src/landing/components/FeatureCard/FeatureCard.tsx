import { Box, Stack, Text, Heading } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Icon, IconComponentModel } from '../../../_shared/components';
import { TranslationKey } from '../../../_shared/types/i18n';

type Props = {
  title: TranslationKey;
  body: TranslationKey;
  iconName: keyof IconComponentModel;
};

const containerProps = {
  w: { xl: '80', lg: '80', md: '80', base: 'full' },
  minH: '64',
  background: 'white.pure',
  border: 'dark.m',
  boxShadow: 'noBlur.dark.m',
  borderRadius: 'lg',
  p: '6',
  gap: '2',
};

export const FeatureCard: React.FC<Props> = ({ body, iconName, title }) => {
  const { t } = useTranslation();

  return (
    <Stack {...containerProps}>
      <Box h="10" w="10">
        <Icon name={iconName} />
      </Box>
      <Heading as="h3" size="body-sm">
        {t(title)}
      </Heading>
      <Text as="p" textStyle="body-xs">
        {t(body)}
      </Text>
    </Stack>
  );
};
