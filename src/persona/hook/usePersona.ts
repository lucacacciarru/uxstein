import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../../auth/store/selectors';
import { fetchPersonaTrigger } from '../store/actions/fetchPersona';
import { getPersonaItems } from '../store/selectors/getPersonaItems';
import { getPersonaStatus } from '../store/selectors/getPersonaStatus';

export function usePersona() {
  const dispatch = useDispatch();
  const personaList = useSelector(getPersonaItems);
  const personaStatus = useSelector(getPersonaStatus);
  const username = useSelector(getUserProfile)?.username || '';
  const fetchPersonaList = () => {
    dispatch(fetchPersonaTrigger({ username }));
  };
  return {
    fetchPersonaList,
    personaList,
    personaStatus,
  };
}
