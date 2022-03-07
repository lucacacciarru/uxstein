import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../../auth/store/selectors';
import { deletePersonaTrigger } from '../store/actions/deletePersona';
import { fetchPersonaTrigger } from '../store/actions/fetchPersona';
import { getPersonas } from '../store/selectors/getPersonas';

export function usePersonas() {
  const dispatch = useDispatch();
  const personas = useSelector(getPersonas);
  const username = useSelector(getUserProfile)?.username || '';

  const fetchPersonaList = () => {
    dispatch(fetchPersonaTrigger({ username }));
  };

  const deletePersona = (id: string) => {
    dispatch(deletePersonaTrigger({ id }));
  };

  return {
    fetchPersonaList,
    personas,
    deletePersona,
  };
}
