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
  const { isLogged, logout, username } = useAuth();

  const LoginOrLogout = useMemo(() => {
    if (isLogged) {
      return <MenuItem onClick={logout}>Logout</MenuItem>;
    }
    return (
      <MenuItem>
        <Link to="login">Login</Link>
      </MenuItem>
    );
  }, [isLogged, logout]);
  return (
    <Menu>
      <MenuButton as={Box}>
        <Avatar name={username} icon={<Icon name="Frank" />} />
      </MenuButton>

      <MenuList>
        <MenuItem>Profile</MenuItem>
        {LoginOrLogout}
      </MenuList>
    </Menu>
  );
};
