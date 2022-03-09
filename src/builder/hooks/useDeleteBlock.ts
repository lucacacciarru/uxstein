import { useDispatch } from 'react-redux';
import { deleteItem } from '../store/actions/deleteItem';

export function useDeleteBlock() {
  const dispatch = useDispatch();
  const deleteBlock = (idBlock: string) => {
    dispatch(deleteItem({ id: idBlock }));
  };

  return {
    deleteBlock,
  };
}
