//TODO: IF IS THE CASE, IMPLEMENT THE TRANSITION WITH FRAMERMOTION
import { VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { useEtendButton } from './hooks/useExtendButton';
import { ExtendButton, LinkButtons, Logo } from './Partials';
import styles from './styles/SideNavigation.module.css';

export const SideNavigation: FC = () => {
  const { isExtended, toggleIsExtended, iconButtonProps, containerProps } =
    useEtendButton();

  return (
    <>
      <VStack {...containerProps} className={styles.container}>
        <Logo />
        <LinkButtons isExtendedState={isExtended} />
        <ExtendButton
          isExtendedState={isExtended}
          toggleIsExtended={toggleIsExtended}
          iconButtonProps={iconButtonProps}
        />
      </VStack>
    </>
  );
};
