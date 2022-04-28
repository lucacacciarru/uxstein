import { PayloadAction } from '@reduxjs/toolkit';
import { Layout } from 'react-grid-layout';
import { BUILDER_ACTION_TYPES, BuilderEntityType } from '.';
import { GlobalStyle, GridItem } from './general';

export type SetPayload = {
  gridItems: Record<string, GridItem>;
  pageSettings: Layout[];
  entityId: string;
  entityType: BuilderEntityType;
  title: string;
  globalStyle: GlobalStyle;
};

export type SetAction = PayloadAction<SetPayload, BUILDER_ACTION_TYPES.SET>;
