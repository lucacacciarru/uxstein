import { Box, Center, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '../../../_shared/components';
import { PageHeading } from '../PageHeading';
import { SectionWrapper } from '../SectionWrapper';

export const Intro: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageHeading
        pageName="landing.navigation.about"
        title="landing.about.intro.title"
      />
      <SectionWrapper mt="0">
        <Center bg="brand.lighter" border="dark.m" borderRadius="lg">
          <Box w={{ base: '48', sm: '52', md: '64', lg: '80' }}>
            <Icon name="Success" />
          </Box>
        </Center>
        <Text mt="6">{t('landing.about.intro.body')}</Text>
      </SectionWrapper>
    </>
  );
};
