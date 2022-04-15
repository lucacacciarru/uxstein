import { Layout } from 'react-grid-layout';
import { GridItem } from '../../../builder/store/types';

export type Persona = {
  id: string;
  src: string;
  title: string;
  createdAt: number;
  updatedAt: number;
  builderData: {
    gridItems: Record<string, GridItem>;
    pageSettings: Layout[];
  }
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
