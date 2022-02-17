import { LogoutResponse } from '../types';

const logoutResponse: LogoutResponse = {
  data: { email: 'test', password: 'test' },
};

export function logoutApi() {
  return Promise.resolve(logoutResponse);
}
