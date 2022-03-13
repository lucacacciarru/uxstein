import { Action } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';
import { LoginSuccessAction } from './login';
import { LogoutSuccessAction } from './logout';

export enum INIT_ACTION_TYPES {
  TRIGGER = 'auth/init/trigger',
}

export type InitAuthAction = Action<INIT_ACTION_TYPES.TRIGGER>;

export type WorkerSaga<A extends AnyAction> = (
  action: A,
) => Generator<unknown, void, unknown>;

export type PostLoginWorkerSaga = WorkerSaga<LoginSuccessAction>;

export type PostLogoutWorkerSaga = WorkerSaga<LogoutSuccessAction>;

export type PostAuthOptions = {
  postLogin?: PostLoginWorkerSaga[];
  postLogout?: PostLogoutWorkerSaga[];
};
