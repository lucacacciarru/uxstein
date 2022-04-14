import { FC } from 'react';
import { useNavLabels } from '../../hooks/useNavLabels';
import { NavButtonLink } from '../NavButtonLink/NavButtonLink';

export const LandingLinks: FC = () => {
  const { navLabels } = useNavLabels();
  return (
    <>
      <NavButtonLink
        to="/examples"
        variant="link"
        color="black.0"
        mt="2"
        py="4"
      >
        {navLabels.examples}
      </NavButtonLink>
      <NavButtonLink to="/about" variant="link" color="black.0" mt="2" py="4">
        {navLabels.about}
      </NavButtonLink>
    </>
  );
};
