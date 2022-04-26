import { createAction } from '@reduxjs/toolkit';
import { BUILDER_ACTION_TYPES } from '../types';
import { UpdateLayoutPayload } from '../types/updateLayout';

export const updateLayout = createAction<
  UpdateLayoutPayload,
  BUILDER_ACTION_TYPES.UPDATE_LAYOUT
>(BUILDER_ACTION_TYPES.UPDATE_LAYOUT);
