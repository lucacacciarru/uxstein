import { createAction } from '@reduxjs/toolkit';
import { INIT_ACTION_TYPES } from '../types/init';

export const initAuth = createAction(INIT_ACTION_TYPES.TRIGGER);
