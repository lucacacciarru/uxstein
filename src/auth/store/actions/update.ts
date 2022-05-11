import { createAction } from '@reduxjs/toolkit';
import {
  UpdateProfileFailurePayload,
  UpdateProfilePayload,
  UpdateProfileSuccessPayload,
  UPDATE_PROFILE_ACTION_TYPE,
} from '../types/updateProfile';

export const updateTrigger = createAction<
  UpdateProfilePayload,
  UPDATE_PROFILE_ACTION_TYPE.TRIGGER
>(UPDATE_PROFILE_ACTION_TYPE.TRIGGER);

export const updateRequest = createAction<
  UpdateProfilePayload,
  UPDATE_PROFILE_ACTION_TYPE.REQUEST
>(UPDATE_PROFILE_ACTION_TYPE.REQUEST);

export const updateSuccess = createAction<
  UpdateProfileSuccessPayload,
  UPDATE_PROFILE_ACTION_TYPE.SUCCESS
>(UPDATE_PROFILE_ACTION_TYPE.SUCCESS);

export const updateFailure = createAction<
  UpdateProfileFailurePayload,
  UPDATE_PROFILE_ACTION_TYPE.FAILURE
>(UPDATE_PROFILE_ACTION_TYPE.FAILURE);
