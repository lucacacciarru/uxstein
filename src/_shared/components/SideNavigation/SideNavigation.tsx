import { Spacer, StackProps, Text, VStack } from '@chakra-ui/react';
import { FC, useMemo } from 'react';
import { Icon } from '../Icon';
import { CustomLink, Logo } from './Partials';
import styles from './SideNavigation.module.css';

export const SideNavigation: FC = () => {
  const containerProps: StackProps = useMemo(() => {
    return {
      position: 'absolute',
      top: '0',
      left: '0',
      h: '100vh',
      w: '28',
      border: 'dark.s',
      borderWidth: '0 3px',
      spacing: '20',
      bg: 'white.bg',
      zIndex: '20',
      overflow: 'hidden',
      pt: '8',
      _hover: { w: '56' },
    };
  }, []);

  return (
    <VStack {...containerProps} className={styles.container}>
      <Logo />
      <VStack spacing="0">
        <CustomLink to="my-personas">
          <Icon name="UserGroup" size="12" />
          <Text>Personas</Text>
        </CustomLink>
        <CustomLink to="my-templates">
          <Icon name="Layout10" size="12" />
          <Text>Templates</Text>
        </CustomLink>
        <Spacer />
      </VStack>
    </VStack>
  );
};
