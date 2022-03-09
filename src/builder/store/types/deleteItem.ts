import { PayloadAction } from '@reduxjs/toolkit';
import { BUILDER_ACTION_TYPES } from './general';

export type DeleteItemPayload = {
  id: string;
};

export type DeleteItemAction = PayloadAction<
  DeleteItemPayload,
  BUILDER_ACTION_TYPES.DELETE
>;
