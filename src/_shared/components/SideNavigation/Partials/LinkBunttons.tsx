import { Spacer, Text, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { CustomLink } from '.';
import { Icon } from '../../Icon';
import styles from '../styles/SideNavigation.module.css';

type Props = {
  isExtended: boolean;
};

export const LinkButtons: FC<Props> = ({ isExtended }) => {
  const { t } = useTranslation();
  return (
    <VStack spacing="0" className={isExtended ? styles.isExtended : ''}>
      <CustomLink to="my-personas">
        <Icon name="UserGroup" size="12" />
        <Text>{t('sideNav.personas')}</Text>
      </CustomLink>
      <CustomLink to="my-templates">
        <Icon name="Layout10" size="12" />
        <Text>{t('sideNav.templates')}</Text>
      </CustomLink>
      <Spacer />
    </VStack>
  );
};
