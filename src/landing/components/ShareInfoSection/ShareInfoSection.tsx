import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageFallback } from '../../../builder/components/ImageFallback/ImageFallback';
import { landingImgLibrary } from '../../assets/imgLibrary';
import { SectionWrapper } from '../SectionWrapper';

export const ShareInfoSection: FC = () => {
  const { t } = useTranslation();
  return (
    <SectionWrapper bg="brand.lighter">
      <Flex
        flexDir={{ base: 'column', lg: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        gap="16"
        px="8"
      >
        <Image
          src={landingImgLibrary.shareInfo}
          fallback={<ImageFallback />}
          w={{ base: 'full', md: '70%', lg: '96', xl: 'xl', '2xl': '3xl' }}
        />
        <Box maxW={{ base: 'auto', lg: 'xl', '2xl': '3xl' }}>
          <Heading as="h3" mb="4">
            {t('landing.shareInfo.title')}
          </Heading>
          <Text>{t('landing.shareInfo.body')}</Text>
        </Box>
      </Flex>
    </SectionWrapper>
  );
};
