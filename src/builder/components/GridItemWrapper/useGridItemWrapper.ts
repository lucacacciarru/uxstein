import { useCallback } from 'react';
import { useSelectedBlock } from '../../hooks/useSelectedBlock';

export const useGridItemWrapper = (id: string) => {
  const { selectedBlockId, selectBlock } = useSelectedBlock();
  const isSelected = selectedBlockId !== id;
  const opacity = selectedBlockId && isSelected ? '0.3' : '1';

  const select = useCallback(() => {
    selectBlock(id);
  }, [id, selectBlock]);

  return {
    opacity,
    select,
  };
};
