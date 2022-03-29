import { PayloadAction } from '@reduxjs/toolkit';
import { BUILDER_ACTION_TYPES } from './general';

export type PopulateBuilderPayload = {
    personaId: string;
}

export type PopulateBuilderAction = PayloadAction<
    PopulateBuilderPayload,
    BUILDER_ACTION_TYPES.POPULATE
>;