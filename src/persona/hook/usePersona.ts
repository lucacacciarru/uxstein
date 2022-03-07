import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../../auth/store/selectors';
import { deletePersonaTrigger } from '../store/actions/deletePersona';
import { fetchPersonaTrigger } from '../store/actions/fetchPersona';
import { getPersonaAllIds } from '../store/selectors/getPersonaAllIds';
import { getPersonas } from '../store/selectors/getPersonas';

export function usePersona() {
  const dispatch = useDispatch();
  const personaAllIds = useSelector(getPersonaAllIds);
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
    personaAllIds,
    personas,
    deletePersona,
  };
}
