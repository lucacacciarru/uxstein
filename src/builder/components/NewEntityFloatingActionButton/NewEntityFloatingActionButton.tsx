import React from 'react';
import { Link } from 'react-router-dom';
import { FloatingActionButton } from '../../../_shared/components/FloatingActionButton';
import { IconComponentModel } from '../../../_shared/components';
import { useBuilderEntity } from '../../hooks/useBuilderEntity';
import { useDispatch } from 'react-redux';
import { updateBuilder } from '../../store/actions/update';

type Props = {
  destinationPath: string;
  iconName?: keyof IconComponentModel;
}

export const NewEntityFloatingActionButton: React.FC<Props> = ({ destinationPath, iconName = 'Add' }) => {
  const dispatch = useDispatch();
  const { entityType } = useBuilderEntity();

  React.useEffect(() => {
    dispatch(updateBuilder({ entityType }));
  }, [entityType]);

  return (
    <Link to={destinationPath} data-testid='new-entity-link'>
      <FloatingActionButton iconName={iconName} />
    </Link>
  );
};
