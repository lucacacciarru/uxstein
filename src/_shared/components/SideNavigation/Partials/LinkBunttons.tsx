import { Spacer, Text, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { CustomLink } from '.';
import { PATHS } from '../../../types/paths';
import { Icon } from '../../Icon';
import styles from '../styles/SideNavigation.module.css';

type Props = {
  isExtended: boolean;
};

export const LinkButtons: FC<Props> = ({ isExtended }) => {
  const { t } = useTranslation();
  return (
    <VStack
      spacing="0"
      className={isExtended ? styles.isExtended : ''}
      data-testid="linkButton"
    >
      <CustomLink to={PATHS.PERSONAS}>
        <Icon name="UserGroup" size="12" />
        <Text>{t('navigation.personas')}</Text>
      </CustomLink>
      <CustomLink to={PATHS.TEMPLATES}>
        <Icon name="Layout10" size="12" />
        <Text>{t('navigation.templates')}</Text>
      </CustomLink>
      <Spacer />
    </VStack>
  );
};
