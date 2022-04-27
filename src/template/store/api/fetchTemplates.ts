import wretch from 'wretch';
import { FetchTemplatesResponse } from '../types/fetchTemplates';

export async function fetchTemplatesApi(username: string): Promise<FetchTemplatesResponse> {
  const [personalTemplates, defaultTemplates] = await Promise.all([
    fetchTemplates(username),
    fetchTemplates(),
  ]);

  return {
    data: [...personalTemplates.data, ...defaultTemplates.data],
  };
}

export async function fetchTemplates(username?: string) {
  const resData = await wretch(
    `${process.env.REACT_APP_API_URL}/templates?default=${
      username ? `false&username=${username}` : 'true'
    }`,
  )
    .get()
    .json();
  const userResponse: FetchTemplatesResponse = { data: resData[0].data };
  return userResponse;
}
