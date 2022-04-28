import { useCallback, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BuilderContext } from '../components/BuilderContext';
import { clearSelected, selectItem } from '../store/actions/selected';
import { getSelectedBlockId } from '../store/selectors/getSelectedBlockId';

export const useSelectedBlock = () => {
  const dispatch = useDispatch();
  const selectedBlockId = useSelector(getSelectedBlockId);
  const { setShowGridPlaceholder } = useContext(BuilderContext);

  const clearSelection = () => dispatch(clearSelected());

  const selectBlock = useCallback(
    (id: string) => {
      dispatch(selectItem({ itemId: id }));
      setShowGridPlaceholder(false);
    },
    [dispatch, setShowGridPlaceholder],
  );

  return {
    selectedBlockId,
    clearSelection,
    selectBlock,
  };
};
