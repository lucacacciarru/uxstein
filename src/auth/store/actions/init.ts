import { createAction } from '@reduxjs/toolkit';
import { User } from '../types';
import { INIT_ACTION_TYPES } from '../types/init';

export const initAuth = createAction(INIT_ACTION_TYPES.TRIGGER);
export const postLogin = createAction<User, INIT_ACTION_TYPES.POST_LOGIN>(INIT_ACTION_TYPES.POST_LOGIN);
export const postLogout = createAction(INIT_ACTION_TYPES.POST_LOGOUT);
