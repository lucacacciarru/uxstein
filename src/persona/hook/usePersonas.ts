import { useDispatch, useSelector } from 'react-redux';
import { useLoading } from '../../_shared/store/loading';
import { LoadingKeys } from '../../_shared/store/loading/types';
import { deletePersonaTrigger } from '../store/actions/deletePersona';
import { fetchPersonasTrigger } from '../store/actions/fetchPersonas';
import { updatePersonaTrigger } from '../store/actions/updatePersona';
import { getPersonas } from '../store/selectors/getPersonas';
import { Persona } from '../store/types/general';

export function usePersonas() {
  const dispatch = useDispatch();
  const personas = useSelector(getPersonas);
  const { isLoading } = useLoading(LoadingKeys.persona);

  const fetchPersonaList = () => {
    dispatch(fetchPersonasTrigger());
  };

  const deletePersona = (id: string) => {
    dispatch(deletePersonaTrigger({ id }));
  };

  const updatePersona = (
    id: string,
    properties: Omit<Partial<Persona>, 'id'>,
  ) => {
    dispatch(updatePersonaTrigger({ id, properties }));
  };

  return {
    fetchPersonaList,
    personas,
    deletePersona,
    updatePersona,
    isLoading,
  };
}
