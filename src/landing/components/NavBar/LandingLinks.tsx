import { FC } from 'react';
import { useNavLabels } from '../../hooks/useNavLabels';
import { NavLinkButton } from '../NavButtonLink/NavButtonLink';

export const LandingLinks: FC = () => {
  const { navBar } = useNavLabels();
  return (
    <>
      <NavLinkButton
        to="/examples"
        variant="link"
        color="black.0"
        mt="2"
        py="4"
      >
        {navBar.examples}
      </NavLinkButton>
      <NavLinkButton to="/about" variant="link" color="black.0" mt="2" py="4">
        {navBar.about}
      </NavLinkButton>
    </>
  );
};
