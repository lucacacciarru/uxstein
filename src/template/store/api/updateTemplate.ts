import { UpdateTemplatePayload } from '../types/updateTemplate';

export async function updateTemplateApi(_update: UpdateTemplatePayload) {
  return Promise.resolve({..._update});
}
