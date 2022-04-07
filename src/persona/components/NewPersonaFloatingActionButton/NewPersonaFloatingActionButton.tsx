import { FloatingActionButton } from '../../../_shared/components/FloatingActionButton';
import { Link } from 'react-router-dom';
import { PATHS } from '../../../_shared/types/paths';

export const NewPersonaFloatingActionButton: React.FC = () => {
  return (
    <Link to={`${PATHS.CREATE_PERSONA}`} data-testid="new-persona-link">
      <FloatingActionButton iconName="Add" />
    </Link>
  );
};
