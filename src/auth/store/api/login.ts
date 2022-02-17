import { LoginResponse } from '../types/login';

export async function loginApi(email: string, password: string) {
  try {
    const response = await fetch(`http://localhost:7000/users?email=${email}`);
    const resData = await response.json();
    const userResponse: LoginResponse = { data: resData[0] };
    return userResponse;
  } catch (error) {
    throw new Error('Something went wrong');
  }
}
