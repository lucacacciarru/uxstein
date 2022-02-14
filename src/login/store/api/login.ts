import { LoginResponse } from '../types/login';

const loginResponse: LoginResponse = { data: {} };

export function loginApi(username: string, password: string) {
  return Promise.resolve(loginResponse);
}
