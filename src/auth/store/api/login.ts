import { LoginResponse } from '../types/login';

export async function loginApi(email: string, password: string) {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/users?email=${email}`,
    );
    const resData = await response.json();
    const userResponse: LoginResponse = { data: resData[0] };
    return userResponse;
  } catch (error) {
    throw new Error('Something went wrong');
  }
}
