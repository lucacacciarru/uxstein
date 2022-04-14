import { ButtonProps } from '@chakra-ui/react';
import { FC } from 'react';
import { NavButtonLink } from '../NavButtonLink/NavButtonLink';

export const FooterLinkWrapper: FC<{ to: string } & ButtonProps> = props => {
  return (
    <NavButtonLink
      variant="link"
      color="black.0"
      w="fit-content"
      justifyContent="flex-start"
      minW="auto"
      py={{ base: '2.5', lg: '2' }}
      {...props}
    >
      {props.children}
    </NavButtonLink>
  );
};
