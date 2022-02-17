export type User = {
  email: string;
  password: string;
};
export type ApiError = {};

export type AuthState = {
  status?: 'idle' | 'logged' | 'logging';
  profile?: User;
};
