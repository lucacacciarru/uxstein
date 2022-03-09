export type Persona = {
  id: string;
  src: string;
  title: string;
  createdAt: number;
  updatedAt: number;
};

export type ApiError = {};

export type PersonasData = {
  allIds: string[];
  byId: Record<string, Persona>;
};

export type PersonaState = {
  data: PersonasData;
  rollbackData?: PersonasData;
};
