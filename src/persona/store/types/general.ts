export type Persona = {
  id: string;
  src: string;
  title: string;
  createdAt: number;
  updatedAt: number;
};

export type ApiError = {};

export type PersonaState = {
  status?: 'idle' | 'logged' | 'logging';
  personas?: Persona[];
};
