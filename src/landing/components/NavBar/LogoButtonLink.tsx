//TODO: replace <Icon name='success'> with real logo
import { FC } from 'react';
import { Icon } from '../../../_shared/components';
import { PATHS } from '../../../_shared/types/paths';
import { NavLinkButton } from '../NavButtonLink/NavButtonLink';

export const LogoButtonLink: FC = () => {
  return (
    <NavLinkButton
      to={PATHS.INDEX}
      variant="link"
      color="black.0"
      zIndex="popover"
      size="xs"
    >
      <Icon name="Success" size="20" />
    </NavLinkButton>
  );
};
