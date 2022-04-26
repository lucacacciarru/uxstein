import wretch from 'wretch';
import { someAsyncOperation } from '../../../_shared/utils';
import { FetchPersonasResponse } from '../types/fetchPersonas';

export async function fetchPersonaApi(username: string): Promise<FetchPersonasResponse> {
  await someAsyncOperation(false);

  const allPersonasByUser = await wretch(`${process.env.REACT_APP_API_URL}/personas?username=${username}`)
    .get()
    .json();

  return allPersonasByUser[0].data;
}

