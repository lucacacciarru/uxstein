import wretch from 'wretch';
import { UpdatePersonaPayload, UpdatePersonaResponse } from '../types/updatePersona';
import { someAsyncOperation } from '../../../_shared/utils';

export async function updatePersonaApi(_update: UpdatePersonaPayload): Promise<UpdatePersonaResponse> {
  await someAsyncOperation(false);

  const allPersonasByUser = await wretch(`${process.env.REACT_APP_API_URL}/personas`)
    .get().json();

  console.log('j', allPersonasByUser)

  const personaToUpdate: UpdatePersonaResponse = allPersonasByUser.find((el: any) => el.username === 'test')
    .data
    .find((persona: any) => persona.id === _update.id);

  console.log(personaToUpdate)

  const nowTimestamp = Date.now();

  return {
    ...personaToUpdate,
    ..._update,
    updatedAt: nowTimestamp,
  };
}
