export type User = {};
export type ApiError = {};

export type AuthState = {
  status?: 'idle' | 'logged' | 'logging';
  profile?: User;
};
