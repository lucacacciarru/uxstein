import { UpdatePersonaPayload } from '../types/updatePersona';

export async function updatePersonaApi(_update: UpdatePersonaPayload) {
  const nowTimestamp = Date.now();
  const updatedPersona = { ..._update, updatedAt: nowTimestamp };
  return Promise.resolve(updatedPersona);
}
