import { Action, PayloadAction } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';
import { User } from './general';

export enum INIT_ACTION_TYPES {
  TRIGGER = 'auth/init/trigger',
  POST_LOGIN = 'auth/init/postLogin',
  POST_LOGOUT = 'auth/init/postLogout',
}

export type InitAuthAction = Action<INIT_ACTION_TYPES.TRIGGER>;
export type PostLoginAction = PayloadAction<User, INIT_ACTION_TYPES.POST_LOGIN>;
export type PostLogoutAction = Action<INIT_ACTION_TYPES.POST_LOGOUT>;

export type WorkerSaga<A extends AnyAction> = (
  action: A,
) => Generator<unknown, void, unknown>;

export type PostLoginWorkerSaga = WorkerSaga<PostLoginAction>;

export type PostLogoutWorkerSaga = WorkerSaga<PostLogoutAction>;

export type PostAuthOptions = {
  postLogin?: PostLoginWorkerSaga[];
  postLogout?: PostLogoutWorkerSaga[];
};
