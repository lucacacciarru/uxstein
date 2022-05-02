import { useCallback, useMemo } from 'react';
import { useSelectedBlock } from '../../hooks/useSelectedBlock';

export const useGridItemWrapper = (id: string) => {
  const { selectedBlockId, selectBlock } = useSelectedBlock();
  const isSelected = useMemo(
    () => selectedBlockId !== id,
    [id, selectedBlockId],
  );
  const opacity = useMemo(
    () => (selectedBlockId && isSelected ? '0.3' : '1'),
    [isSelected, selectedBlockId],
  );

  const select = useCallback(() => {
    selectBlock(id);
  }, [id, selectBlock]);

  return {
    opacity,
    select,
  };
};
