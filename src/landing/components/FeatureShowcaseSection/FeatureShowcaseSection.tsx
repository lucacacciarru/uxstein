//TODO: replace box with a general <Section/> wrapper (so padding ecc are same for every section)
import { Box, Heading, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { FeaturesShowcase } from '../FeaturesShowcase/FeaturesShowcase';

export const FeaturesShowcaseSection: FC = () => {
  const { t } = useTranslation();
  return (
    <Box p="16">
      <Heading as="h2" textStyle="h2" textAlign="center">
        {t('landing.featureShowcase.sectionTitle')}
        <Text as="span" color="brand.primary">
          Personas
        </Text>
      </Heading>

      <FeaturesShowcase />
    </Box>
  );
};
