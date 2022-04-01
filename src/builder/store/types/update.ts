import { PayloadAction } from '@reduxjs/toolkit';
import { BUILDER_ACTION_TYPES } from '.';
import { BuilderState } from './general';


export type UpdatePayload = Partial<BuilderState>

export type UpdateAction = PayloadAction<
    UpdatePayload,
    BUILDER_ACTION_TYPES.UPDATE
>;