import { Box, Button, Center } from '@chakra-ui/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Icon } from '../components';

export const ErrorPage: FC = () => {
  const { t } = useTranslation();
  return (
    <Center h="90vh" w="100vw">
      <Box textAlign="center">
        <Icon name="Error" size="44" />
        <h1>{t('errorPage.title')}</h1>
        <h3>{t('errorPage.subtitle')}</h3>
        <Link to="/">
          <Button mt="4">{t('errorPage.cta')}</Button>
        </Link>
      </Box>
    </Center>
  );
};
