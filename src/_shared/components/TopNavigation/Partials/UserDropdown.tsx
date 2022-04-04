import {
  Avatar,
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../../auth/hooks';
import { PATHS } from '../../../types/paths';
import { Icon } from '../../Icon/Icon';

export const UserDropdown: FC = () => {
  const { isLogged, logout, profile } = useAuth();
  const { t } = useTranslation();
  const LoginOrLogout = useMemo(() => {
    if (isLogged) {
      return (
        <MenuItem
          onClick={logout}
          outline="3px solid"
          outlineColor="black.0"
          data-testid="logout-button"
        >
          {t('navigation.userDropdown.logout')}
        </MenuItem>
      );
    }
    return (
      <MenuItem as={Link} to={PATHS.LOGIN} data-testid="login-link">
        {t('navigation.userDropdown.login')}
      </MenuItem>
    );
  }, [isLogged, logout, t]);
  return (
    <Menu>
      <MenuButton as={Box} role="button">
        <Avatar name={profile?.username} icon={<Icon name="Frank" />} />
      </MenuButton>

      <MenuList data-testid="menu-list">
        <MenuItem as={Link} to={PATHS.PROFILE} data-testid="profile-link">
          {t('navigation.userDropdown.profile')}
        </MenuItem>
        {LoginOrLogout}
      </MenuList>
    </Menu>
  );
};
