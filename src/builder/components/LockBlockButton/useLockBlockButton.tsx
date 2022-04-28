import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconComponentModel } from '../../../_shared/components';
import { updateLayout } from '../../store/actions/update';
import { getSingleLayout } from '../../store/selectors/getSingleLayout';

type Params = {
  id: string;
  iconColor: string;
};

export function useLockBlockButton({ id, iconColor }: Params) {
  const dispatch = useDispatch();
  const isUnlocked = useSelector(getSingleLayout(id))?.isDraggable;

  const nameIcon = useMemo(
    (): keyof IconComponentModel => (isUnlocked ? 'Unlock' : 'Lock'),
    [isUnlocked],
  );

  const iconLockColor = useMemo(
    () => (isUnlocked ? iconColor : 'brand.primary'),
    [iconColor, isUnlocked],
  );

  const toggleLockBlock = () => {
    const newIsLocked = !isUnlocked;
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
