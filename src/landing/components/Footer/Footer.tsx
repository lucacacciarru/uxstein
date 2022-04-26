import { Flex, HStack } from '@chakra-ui/react';
import { FC } from 'react';
import { PATHS } from '../../../_shared/types/paths';
import { useNavLabels } from '../../hooks/useNavLabels';
import { LogoButtonLink } from '../LogoButtonLink/LogoButtonLink';
import { FooterLinkWrapper } from './FooterLinkWrapper';

export const Footer: FC = () => {
  const { navLabels } = useNavLabels();
  return (
    <HStack
      bg="brand.lighter"
      py={{ base: '16', md: '8' }}
      px={{ base: '4', md: '8' }}
      alignItems={{ base: 'flex-start', md: 'center' }}
      justifyContent="flex-start"
      flexDir={{ base: 'column', sm: 'row' }}
    >
      <LogoButtonLink mr={{ base: '0', sm: '6', md: '16' }} size="sm" />
      <Flex
        justifyContent="space-between"
        w="90%"
        flexWrap="wrap"
        gap="4"
        flexDir={{ base: 'column', sm: 'row' }}
      >
        <Flex
          gap={{ base: '0', md: '24' }}
          flexDir={{ base: 'column', md: 'row' }}
        >
          <FooterLinkWrapper to="/terms-conditions">
            {navLabels.termsConditions}
          </FooterLinkWrapper>
          <FooterLinkWrapper to="/privacy-policy">
            {navLabels.privacyPolicy}
          </FooterLinkWrapper>
        </Flex>

        <Flex
          gap={{ base: '0', sm: '10', md: '24' }}
          flexDir={{ base: 'column', sm: 'row' }}
        >
          <FooterLinkWrapper to="/examples">
            {navLabels.examples}
          </FooterLinkWrapper>
          <FooterLinkWrapper to={PATHS.ABOUT}>
            {navLabels.about}
          </FooterLinkWrapper>
          <FooterLinkWrapper to={PATHS.FAQ}>{navLabels.faq}</FooterLinkWrapper>
        </Flex>
      </Flex>
    </HStack>
  );
};
