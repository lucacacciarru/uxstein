import { nanoid } from '@reduxjs/toolkit';
import { someAsyncOperation } from '../../../_shared/utils';
import { CreatePersonaPayload, CreatePersonaResponse } from '../types/createPersona';

export async function createPersonaApi(_persona: CreatePersonaPayload): Promise<CreatePersonaResponse> {
  await someAsyncOperation(false);

  const nowTimestamp = Date.now();

  return {
    ..._persona,
    id: nanoid(),
    createdAt: nowTimestamp,
    updatedAt: nowTimestamp,
  };
}
