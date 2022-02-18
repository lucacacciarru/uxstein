import { Spacer, Text, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { CustomLink } from '.';
import { Icon } from '../../Icon';
import styles from '../styles/SideNavigation.module.css';

type Props = {
  isExtendedState: boolean;
};

export const LinkButtons: FC<Props> = ({ isExtendedState }) => {
  return (
    <VStack spacing="0" className={isExtendedState ? styles.isExtended : ''}>
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
  );
};
