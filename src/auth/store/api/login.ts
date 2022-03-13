import wretch from 'wretch';
import { User } from '../types';
import { LoginResponse } from '../types/login';

export async function loginWithEmailAndPassword(
  email: string,
  password: string,
): Promise<LoginResponse> {
  const response = await wretch(
    `${process.env.REACT_APP_API_URL}/users?email=${email}`,
  )
    .get()
    .json<User[]>();

  return { data: response[0] };
}

export async function loginWithToken(token: string): Promise<LoginResponse> {
  const response = await wretch(
    `${process.env.REACT_APP_API_URL}/users?token=${token}`,
  )
    .get()
    .json<User[]>();

  const data = response[0];

  return { data };
}
