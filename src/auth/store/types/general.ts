export type User = {
  id: string;
  email: string;
  token?: string; // Will probably be removed after backend integration
  password: string;
  username: string;
  avatar?: string;
};
export type ApiError = {};

export type AuthState = {
  status?: 'idle' | 'logged' | 'logging';
  profile?: User;
  rollbackData?: Partial<User>;
};
