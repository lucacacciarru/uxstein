import { LoginResponse } from '../types/login';
import { checkPassword } from './utils/checkPassword';

export async function loginApi(email: string, password: string) {
  try {
    const response = await fetch(`http://localhost:7000/user?email=${email}`);
    const resData = await response.json();
    const userResponse: LoginResponse = { data: resData[0] };
    if (checkPassword(password, userResponse.data.password)) {
      return userResponse;
    }
  } catch (error) {
    throw new Error('Something went wrong');
  }
}
