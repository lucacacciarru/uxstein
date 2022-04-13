import { Button, ButtonProps } from '@chakra-ui/react';
import { FC } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

type Props = {
  to: string;
} & ButtonProps;

export const NavLinkButton: FC<Props> = ({ children, to, ...buttonProps }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Button
      {...buttonProps}
      textDecoration={match ? 'underline' : 'none'}
      as="button"
    >
      <Link to={to} aria-details={match ? 'active-link' : ''}>
        {children}
      </Link>
    </Button>
  );
};
