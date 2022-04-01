import wretch from 'wretch';
import { FetchTemplatesResponse } from '../types/fetchTemplates';

export async function fetchTemplatesApi(username: string) {
  const [personalTemplates, defaultTemplates] = await Promise.all([
    fetchTemplates(username),
    fetchTemplates(),
  ]);
  const templates: FetchTemplatesResponse = {
    data: [...personalTemplates.data, ...defaultTemplates.data],
  };

  return templates;
}

async function fetchTemplates(username?: string) {
  const resData = await wretch(
    `${process.env.REACT_APP_API_URL}/templates?default=true${
      username ? `username=${username}` : ''
    }`,
  )
    .get()
    .json();
  const userResponse: FetchTemplatesResponse = { data: resData[0].data };
  return userResponse;
}
