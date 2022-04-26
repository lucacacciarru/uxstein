import { CreateTemplatePayload, CreateTemplateResponse } from '../types/createTemplate';
import { nanoid } from '@reduxjs/toolkit';
import { someAsyncOperation } from '../../../_shared/utils';

export async function createTemplateApi(_template: CreateTemplatePayload): Promise<CreateTemplateResponse> {
  await someAsyncOperation(false);

  return {
    ..._template,
    id: nanoid(),
  };
}
