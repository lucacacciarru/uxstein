import { nanoid } from '@reduxjs/toolkit';
import { CreatePersonaPayload } from '../types/createPersona';

export async function createPersonaApi(_persona: CreatePersonaPayload) {
  const nowTimestamp = Date.now();
  const createdPersona = { ..._persona, id: nanoid(), createdAt: nowTimestamp, updatedAt: nowTimestamp };
  return Promise.resolve(createdPersona);
}
