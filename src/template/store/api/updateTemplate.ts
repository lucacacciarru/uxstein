import wretch from 'wretch';
import { UpdateTemplatePayload, UpdateTemplateResponse } from '../types/updateTemplate';
import { someAsyncOperation } from '../../../_shared/utils';

export async function updateTemplateApi(_update: UpdateTemplatePayload): Promise<UpdateTemplateResponse> {
  await someAsyncOperation(false);

  const allTemplatesByUser = await wretch(`${process.env.REACT_APP_API_URL}/templates`)
    .get().json();

  const templateToUpdate: UpdateTemplateResponse = allTemplatesByUser.find((el: any) => el.username === 'test')
    .data
    .find((template: any) => template.id === _update.id);


  return {
    ...templateToUpdate,
    ..._update,
  };
}
