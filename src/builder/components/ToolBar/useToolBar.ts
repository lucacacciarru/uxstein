import { useSelectedBlock } from '../../hooks/useSelectedBlock';

export const useToolBar = () => {
  const { selectedBlockId } = useSelectedBlock();
  const selectedIndex = selectedBlockId ? 1 : 0;
  return {
    selectedBlockId,
    selectedIndex,
  };
};
