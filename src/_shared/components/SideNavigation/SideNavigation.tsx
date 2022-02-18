//TODO: IF IS THE CASE, IMPLEMENT THE TRANSITION WITH FRAMERMOTION
import { StackProps, VStack } from '@chakra-ui/react';
import { FC, useMemo } from 'react';
import { useEtendButton } from './hooks/useExtendButton';
import { ExtendButton, LinkButtons, Logo } from './Partials';
import styles from './styles/SideNavigation.module.css';
import { stackContainerBaseProps } from './styles/sideNavStylingProps';

export const SideNavigation: FC = () => {
  const { isExtended, toggleIsExtended } = useEtendButton();

  const containerProps: StackProps = useMemo(() => {
    return {
      ...stackContainerBaseProps,
      w: isExtended ? '56' : '28',
    };
  }, [isExtended]);

  return (
    <>
      <VStack {...containerProps} className={styles.container}>
        <Logo />
        <LinkButtons isExtendedState={isExtended} />
        <ExtendButton
          isExtendedState={isExtended}
          toggleIsExtended={toggleIsExtended}
        />
      </VStack>
    </>
  );
};
