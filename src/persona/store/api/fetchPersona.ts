import { FetchPersonaResponse } from '../types/fetchPersona';

export async function fetchPersonaApi(username: string) {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/personas?username=${username}`,
    );
    const resData = await response.json();
    const userResponse: FetchPersonaResponse = { data: resData[0].data };
    return userResponse;
  } catch (error) {
    throw new Error('Something went wrong');
  }
}
