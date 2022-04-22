import { Center, Heading, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { TranslationKey } from '../../../_shared/types/i18n';

type Props = {
  title: TranslationKey;
  pageName: TranslationKey;
};

export const PageHeading: FC<Props> = ({ title, pageName }) => {
  const { t } = useTranslation();
  return (
    <Center
      flexDir="column"
      px={{ base: '2', sm: '2.5', md: '6', lg: '14' }}
      pt="6"
    >
      <Text>{t(pageName)}</Text>
      <Heading as="h1" size="h1">
        {t(title)}
      </Heading>
    </Center>
  );
};
