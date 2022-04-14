//TODO: replace <Icon name='success'> with real logo
import { ButtonProps } from '@chakra-ui/react';
import { FC } from 'react';
import { Icon } from '../../../_shared/components';
import { PATHS } from '../../../_shared/types/paths';
import { NavButtonLink } from '../NavButtonLink/NavButtonLink';

export const LogoButtonLink: FC<ButtonProps> = props => {
  return (
    <NavButtonLink
      to={PATHS.INDEX}
      variant="link"
      color="black.0"
      size="xs"
      {...props}
    >
      <Icon name="Success" size="20" />
    </NavButtonLink>
  );
};
