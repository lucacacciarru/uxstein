import { createAction } from '@reduxjs/toolkit';
import {
  UpdateAttributeStylePayload,
  UpdateAttributeValuePayload,
  UpdateBlockStylePayload,
  UpdateGlobalStylePayload,
  UpdateLayoutPayload,
  UpdatePageSettingsPayload,
  UpdatePayload,
  UPDATE_ACTION_TYPES,
} from '../types/update';

export const updateBuilder = createAction<
  UpdatePayload,
  UPDATE_ACTION_TYPES.UPDATE
>(UPDATE_ACTION_TYPES.UPDATE);

export const updateAttributeStyle = createAction<
  UpdateAttributeStylePayload,
  UPDATE_ACTION_TYPES.ATTRIBUTE_STYLE
>(UPDATE_ACTION_TYPES.ATTRIBUTE_STYLE);

export const updateAttributeValue = createAction<
  UpdateAttributeValuePayload,
  UPDATE_ACTION_TYPES.ATTRIBUTE_VALUE
>(UPDATE_ACTION_TYPES.ATTRIBUTE_VALUE);

export const updateBlockStyle = createAction<
  UpdateBlockStylePayload,
  UPDATE_ACTION_TYPES.BLOCK_STYLE
>(UPDATE_ACTION_TYPES.BLOCK_STYLE);

export const updateLayout = createAction<
  UpdateLayoutPayload,
  UPDATE_ACTION_TYPES.LAYOUT
>(UPDATE_ACTION_TYPES.LAYOUT);

export const updatePageSettings = createAction<
  UpdatePageSettingsPayload,
  UPDATE_ACTION_TYPES.PAGE_SETTINGS
>(UPDATE_ACTION_TYPES.PAGE_SETTINGS);

export const updateGlobalStyle = createAction<
  UpdateGlobalStylePayload,
  UPDATE_ACTION_TYPES.GLOBAL_STYLE
>(UPDATE_ACTION_TYPES.GLOBAL_STYLE);
