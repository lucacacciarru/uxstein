//TODO: IF IS THE CASE, IMPLEMENT THE TRANSITION WITH FRAMERMOTION
import { VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { useExtendButton } from './hooks/useExtendButton';
import { ExtendButton, LinkButtons, Logo } from './Partials';
import styles from './styles/SideNavigation.module.css';

export const SideNavigation: FC = () => {
  const { isExtended, iconButtonProps, containerProps } = useExtendButton();

  return (
    <>
      <VStack {...containerProps} className={styles.container}>
        <Logo />
        <LinkButtons isExtended={isExtended} />
        <ExtendButton {...iconButtonProps} />
      </VStack>
    </>
  );
};
