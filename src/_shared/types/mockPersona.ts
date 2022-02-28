export type MockPersona = {
  src: string;
  title: string;
  createdAt: number;
  updatedAt: number;
  type: 'persona' | 'template';
  author?: string;
};
