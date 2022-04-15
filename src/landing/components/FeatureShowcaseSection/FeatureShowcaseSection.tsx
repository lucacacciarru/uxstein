import { Heading, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { FeaturesShowcase } from '../FeaturesShowcase/FeaturesShowcase';
import { SectionWrapper } from '../SectionWrapper';

export const FeaturesShowcaseSection: FC = () => {
  const { t } = useTranslation();
  return (
    <SectionWrapper>
      <Heading as="h2" textStyle="h2" textAlign="center">
        {t('landing.featureShowcase.sectionTitle')}
        <Text as="span" color="brand.primary">
          Personas
        </Text>
      </Heading>

      <FeaturesShowcase />
    </SectionWrapper>
  );
};
