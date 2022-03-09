import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../../auth/store/selectors';
import { useLoading } from '../../_shared/store/loading/hooks';
import { deletePersonaTrigger } from '../store/actions/deletePersona';
import { fetchPersonaTrigger } from '../store/actions/fetchPersona';
import { updatePersonaTrigger } from '../store/actions/updatePersona';
import { getPersonas } from '../store/selectors/getPersonas';
import { Persona } from '../store/types/general';

export function usePersonas() {
  const dispatch = useDispatch();
  const personas = useSelector(getPersonas);
  const username = useSelector(getUserProfile)?.username || '';
  const { isLoading } = useLoading('persona');

  const fetchPersonaList = () => {
    dispatch(fetchPersonaTrigger({ username }));
  };

  const deletePersona = (id: string) => {
    dispatch(deletePersonaTrigger({ id }));
  };

  const uploadPersona = (
    id: string,
    properties: Omit<Partial<Persona>, 'id'>,
  ) => {
    dispatch(updatePersonaTrigger({ id, properties }));
  };

  return {
    fetchPersonaList,
    personas,
    deletePersona,
    uploadPersona,
    isLoading,
  };
}
