import { someAsyncOperation } from '../../../_shared/utils';
import { DeletePersonaResponse } from '../types/deletePersona';

export async function deletePersonaApi(id: string): Promise<DeletePersonaResponse> {
  await someAsyncOperation(false);

  return { id };
}
