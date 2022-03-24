import { PayloadAction } from '@reduxjs/toolkit';
import { Layout } from 'react-grid-layout';
import { BUILDER_ACTION_TYPES } from './general';

export type UpdatePageSettingsPayload = {
    pageSettings: Layout[];
}

export type UpdatePageSettingsAction = PayloadAction<
    UpdatePageSettingsPayload,
    BUILDER_ACTION_TYPES.UPDATE_PAGE_SETTINGS
>;