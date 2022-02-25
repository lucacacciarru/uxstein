import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../../_shared/components';

export const BackButton: FC = () => {
  return (
    <Link to="/my-personas">
      <Icon
        name="ChevronLeft"
        size="10"
        transition={'all .2s ease-in-out'}
        _hover={{ color: 'brand.primary', transform: ' scale(1.3)' }}
      />
    </Link>
  );
};
