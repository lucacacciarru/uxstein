import { Action } from '@reduxjs/toolkit';
import { BUILDER_ACTION_TYPES } from './general';

export type ResetAction = Action<
  BUILDER_ACTION_TYPES.RESET
>;
