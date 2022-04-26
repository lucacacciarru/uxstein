import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconComponentModel } from '../../../_shared/components';
import { updateLayout } from '../../store/actions/updateLayout';
import { getSingleLayout } from '../../store/selectors/getSingleLayout';

type Params = {
  id: string;
  iconColor: string;
};

export function useLockBlockButton({ id, iconColor }: Params) {
  const dispatch = useDispatch();
  const isLocked = useSelector(getSingleLayout(id))?.isDraggable;

  const nameIcon = useMemo(
    (): keyof IconComponentModel => (isLocked ? 'Unlock' : 'Lock'),
    [isLocked],
  );

  const iconLockColor = useMemo(
    () => (isLocked ? iconColor : 'brand.primary'),
    [iconColor, isLocked],
  );

  const toggleLockBlock = () => {
    const newIsLocked = !isLocked;
    dispatch(
      updateLayout({
        id,
        properties: { isDraggable: newIsLocked, isResizable: newIsLocked },
      }),
    );
  };

  return {
    nameIcon,
    iconLockColor,
    toggleLockBlock,
  };
}
