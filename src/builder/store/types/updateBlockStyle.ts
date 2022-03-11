import { PayloadAction } from '@reduxjs/toolkit';
import { BUILDER_ACTION_TYPES } from './general';

export type UpdateBlockStylePayload = {
    blockId: string;
    style: Record<string, string>;
}

export type UpdateBlockStyleAction = PayloadAction<
    UpdateBlockStylePayload,
    BUILDER_ACTION_TYPES.UPDATE_BLOCK_STYLE
>;