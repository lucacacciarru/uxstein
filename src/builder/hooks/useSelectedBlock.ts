import { useDispatch, useSelector } from 'react-redux';
import { clearSelected, selectItem } from '../store/actions/selected';
import { getSelectedBlockId } from '../store/selectors/getSelectedBlockId';

export const useSeletedBlock = () => {
    const dispatch = useDispatch();
    const selectedBlockId = useSelector(getSelectedBlockId);

    const clearSelection = () => dispatch(clearSelected());

    const selectBlock = (id: string) => {
        dispatch(selectItem({ itemId: id }));
    };

    return {
        selectedBlockId, clearSelection, selectBlock
    }
}