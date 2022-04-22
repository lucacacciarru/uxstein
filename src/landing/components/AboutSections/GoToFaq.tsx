import { Button, Heading, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { PATHS } from '../../../_shared/types/paths';
import { SectionWrapper } from '../SectionWrapper';

export const GoToFaq: FC = () => {
  const { t } = useTranslation();
  return (
    <SectionWrapper textAlign="center" bg="brand.lighter">
      <Heading as="h2" size="h2">
        {t('landing.about.goToFaq.title')}
      </Heading>
      <Text my="6">{t('landing.about.goToFaq.body')}</Text>
      <Button
        as={Link}
        to={PATHS.FAQ}
        variant="outline"
        color="black.0"
        bg="white.0"
        _hover={{ bg: 'white.0', boxShadow: 'noBlur.green-darker.s' }}
      >
        {t('landing.about.goToFaq.buttonLabel')}
      </Button>
    </SectionWrapper>
  );
};
