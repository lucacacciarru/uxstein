import { useDispatch } from 'react-redux';
import { deleteItem } from '../store/actions/deleteItem';
import { clearSelected } from '../store/actions/selected';

export function useDeleteBlock() {
  const dispatch = useDispatch();
  const deleteBlock = (idBlock: string) => {
    dispatch(deleteItem({ id: idBlock }));
    dispatch(clearSelected());
  };

  return {
    deleteBlock,
  };
}
