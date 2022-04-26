import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { landingImgLibrary } from '../../assets/imgLibrary';
import { SectionWrapper } from '../SectionWrapper';

export const MadeBy: FC = () => {
  const { t } = useTranslation();
  return (
    <SectionWrapper>
      <Flex gap="16" flexDir={{ base: 'column-reverse', md: 'row' }}>
        <Box>
          <Heading as="h2" size="h2">
            {t('landing.about.madeBy.title')}
          </Heading>
          <Text mt="6">{t('landing.about.madeBy.body')}</Text>
        </Box>
        <Image
          src={landingImgLibrary.vlkLogo}
          border="dark.s"
          borderRadius="md"
          px={{ base: '6', md: '10' }}
          objectFit="contain"
          boxSize={{ base: '96', md: '52', lg: '64' }}
          margin="auto"
        />
      </Flex>
    </SectionWrapper>
  );
};
