import { DeleteTemplateResponse } from '../types/deleteTemplate';
import { someAsyncOperation } from '../../../_shared/utils';

export async function deleteTemplateApi(id: string): Promise<DeleteTemplateResponse> {
  await someAsyncOperation(false);

  return { id };
}
