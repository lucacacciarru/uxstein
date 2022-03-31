import wretch from 'wretch';
import { FetchTemplatesResponse } from '../types/fetchTemplates';

export async function fetchTemplatesApi(username: string) {
  const [personalTemplates, defaultTemplates] = await Promise.all([fetchPesonalTemplatesApi(username), fetchDefaultTemplates()]);
  const templates: FetchTemplatesResponse = { data: [...personalTemplates.data, ...defaultTemplates.data] };

  return templates;
}

async function fetchPesonalTemplatesApi(username: string) {
  try {
    const resData = await wretch(
      `${process.env.REACT_APP_API_URL}/templates?default=false&username=${username}`,
    )
      .get()
      .json();
    const userResponse: FetchTemplatesResponse = { data: resData[0].data };
    return userResponse;
  } catch (error) {
    throw new Error('Something went wrong');
  }
}

async function fetchDefaultTemplates() {
  try {
    const resData = await wretch(
      `${process.env.REACT_APP_API_URL}/templates?default=true`,
    )
      .get()
      .json();
    const userResponse: FetchTemplatesResponse = { data: resData[0].data };
    return userResponse;
  } catch (error) {
    throw new Error('Something went wrong');
  }
}