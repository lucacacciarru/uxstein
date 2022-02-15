import { LogoutResponse } from '../types';

const logoutResponse: LogoutResponse = { data: {} };

export function logoutApi() {
  return Promise.resolve(logoutResponse);
}
