import { User } from '../store';

export const createDefaultProfile = (user: User | undefined): User => ({
  email: user?.email || '',
  password: user?.password || '',
  username: user?.username || '',
  id: user?.id || '',
  token: user?.token,
});
