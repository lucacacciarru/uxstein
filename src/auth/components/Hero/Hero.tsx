import { Stack, Heading } from '@chakra-ui/react';
import { HeroImages } from '../HeroImages';
import { useTranslation } from 'react-i18next';

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Stack
      height={'100vh'}
      p={'16'}
      background="brand.lighter"
      as={'section'}
      width="50vw"
      gap={'6rem'}
    >
      <Heading
        dangerouslySetInnerHTML={{ __html: t('auth.hero.title') }}
        as="h2"
      />
      <HeroImages />
    </Stack>
  );
};
