import { Box, Button, Center, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Icon } from '../components';
import { PATHS } from '../types/paths';

export const ErrorPage: FC = () => {
  const { t } = useTranslation();
  return (
    <Center h="90vh" w="100vw">
      <Box textAlign="center">
        <Icon name="Error" size="44" />
        <Text as="h1" textStyle="h1">
          {t('errorPage.title')}
        </Text>
        <Text as="h3" textStyle="h3">
          {t('errorPage.subtitle')}
        </Text>
        <Link to={PATHS.INDEX}>
          <Button mt="4">{t('errorPage.cta')}</Button>
        </Link>
      </Box>
    </Center>
  );
};
