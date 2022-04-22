import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearSelected, selectItem } from '../store/actions/selected';
import { getSelectedBlockId } from '../store/selectors/getSelectedBlockId';

export const useSelectedBlock = () => {
  const dispatch = useDispatch();
  const selectedBlockId = useSelector(getSelectedBlockId);

  const clearSelection = () => dispatch(clearSelected());

  const selectBlock = useCallback(
    (id: string) => {
      dispatch(selectItem({ itemId: id }));
    },
    [dispatch],
  );

  return {
    selectedBlockId,
    clearSelection,
    selectBlock,
  };
};
