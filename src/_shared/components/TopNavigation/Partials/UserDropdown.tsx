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
import { Icon } from '../../Icon/Icon';

export const UserDropdown: FC = () => {
  const { isLogged, logout, profile } = useAuth();
  const { t } = useTranslation();

  const LoginOrLogout = useMemo(() => {
    if (isLogged) {
      return (
        <MenuItem onClick={logout} outline="3px solid" outlineColor="black.0">
          {t('topNav.userDropdown.logout')}
        </MenuItem>
      );
    }
    return (
      <MenuItem as={Link} to="login">
        {t('topNav.userDropdown.login')}
      </MenuItem>
    );
  }, [isLogged, logout, t]);
  return (
    <Menu>
      <MenuButton as={Box}>
        <Avatar name={profile?.username} icon={<Icon name="Frank" />} />
      </MenuButton>

      <MenuList>
        <MenuItem as={Link} to="profile">
          {t('topNav.userDropdown.profile')}
        </MenuItem>
        {LoginOrLogout}
      </MenuList>
    </Menu>
  );
};
