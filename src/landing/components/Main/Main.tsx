import { Box, Button, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Icon } from '../../../_shared/components';
import { landingImgLibrary } from '../../assets/imgLibrary';

export const Main: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Stack as="main" alignItems="center" justify="center" gap="14">
      <Box textAlign="center">
        <Heading
          size="main"
          as="h1"
          dangerouslySetInnerHTML={{ __html: t('landing.main.title') }}
        />
        <Text textStyle="body-md" mt="4" color="black.80">
          {t('landing.main.body')}
        </Text>
        <Button
          mt="8"
          leftIcon={<Icon name="ChevronRight" color="white.pure" />}
          size="xl"
        >
          {t('landing.main.button')}
        </Button>
      </Box>
      <Box w={{ xl: '55vw', base: '90%' }}>
        <Image
          objectFit="contain"
          h="full"
          w="full"
          src={landingImgLibrary.main}
        />
      </Box>
    </Stack>
  );
};
