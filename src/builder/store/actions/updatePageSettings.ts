import { createAction } from '@reduxjs/toolkit';
import { BUILDER_ACTION_TYPES } from '../types';
import { UpdatePageSettingsPayload } from '../types/updatePageSettings';

export const updatePageSettings = createAction<
    UpdatePageSettingsPayload,
    BUILDER_ACTION_TYPES.UPDATE_PAGE_SETTINGS
>(BUILDER_ACTION_TYPES.UPDATE_PAGE_SETTINGS);