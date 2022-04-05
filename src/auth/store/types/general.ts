export type User = {
  email: string;
  token?: string; // Will probably be removed after backend integration
  password: string;
  username: string;
};
export type ApiError = {};

export type AuthState = {
  status?: 'idle' | 'logged' | 'logging';
  profile?: User;
};

declare module '../../../_shared/store/loading/types' {
  enum LoadingKeys {
    auth = 'auth'
  }
}