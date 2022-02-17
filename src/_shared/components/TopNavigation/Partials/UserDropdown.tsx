import {
  Avatar,
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { FC, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../../auth/hooks';
import { Icon } from '../../Icon/Icon';

export const UserDropdown: FC = () => {
  const { isLogged, logout, profile } = useAuth();

  const LoginOrLogout = useMemo(() => {
    if (isLogged) {
      return (
        <MenuItem onClick={logout} outline="3px solid" outlineColor="black.0">
          Logout
        </MenuItem>
      );
    }
    return (
      <MenuItem as={Link} to="login">
        Login
      </MenuItem>
    );
  }, [isLogged, logout]);
  return (
    <Menu>
      <MenuButton as={Box}>
        <Avatar name={profile?.username} icon={<Icon name="Frank" />} />
      </MenuButton>

      <MenuList>
        <MenuItem as={Link} to="profile">
          Profile
        </MenuItem>
        {LoginOrLogout}
      </MenuList>
    </Menu>
  );
};
