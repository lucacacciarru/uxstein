import { CreateTemplatePayload } from '../types/createTemplate';
import { nanoid } from '@reduxjs/toolkit';

export async function createTemplateApi(_template: CreateTemplatePayload) {
  const createdTemplate = { ..._template, id: nanoid() };
  return Promise.resolve(createdTemplate);
}
