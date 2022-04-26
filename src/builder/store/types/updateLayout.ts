import { PayloadAction } from '@reduxjs/toolkit';
import { Layout } from 'react-grid-layout';
import { BUILDER_ACTION_TYPES } from './general';

export type UpdateLayoutPayload = {
  id: string;
  properties: Partial<Layout>;
};

export type UpdateLayoutAction = PayloadAction<
  UpdateLayoutPayload,
  BUILDER_ACTION_TYPES.UPDATE_LAYOUT
>;
