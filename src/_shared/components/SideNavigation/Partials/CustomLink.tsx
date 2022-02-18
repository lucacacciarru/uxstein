import { Center } from '@chakra-ui/react';
import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom';

export const CustomLink = ({ children, to, ...props }: LinkProps) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Center
      bg={match ? 'brand.lightest' : ''}
      w={'32'}
      border={match ? 'dark.s' : 'transparent.s'}
      py="1"
    >
      <Link
        to={to}
        {...props}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        {children}
      </Link>
    </Center>
  );
};
