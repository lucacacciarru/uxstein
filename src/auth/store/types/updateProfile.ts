import { PayloadAction } from '@reduxjs/toolkit';
import { User } from './general';

export enum UPDATE_PROFILE_ACTION_TYPE {
  TRIGGER = 'auth/update/trigger',
  REQUEST = 'auth/update/request',
  SUCCESS = 'auth/update/success',
  FAILURE = 'auth/update/failure',
}

export type UpdateProfileResponse = User;
export type UpdateProfilePayload = {
  id: string;
  proprieties: Omit<Partial<User>, 'token' | 'id'>;
};
export type UpdateProfileSuccessPayload = User;
export type UpdateProfileFailurePayload = { id: string };

export type UpdateProfileAction = PayloadAction<
  UpdateProfilePayload,
  UPDATE_PROFILE_ACTION_TYPE.TRIGGER
>;
export type UpdateProfileRequestAction = PayloadAction<
  UpdateProfilePayload,
  UPDATE_PROFILE_ACTION_TYPE.REQUEST
>;
export type UpdateProfileSuccessAction = PayloadAction<
  UpdateProfileSuccessPayload,
  UPDATE_PROFILE_ACTION_TYPE.SUCCESS
>;
export type UpdateProfileFailureAction = PayloadAction<
  UpdateProfileFailurePayload,
  UPDATE_PROFILE_ACTION_TYPE.FAILURE
>;
