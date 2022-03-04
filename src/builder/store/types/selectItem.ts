import { PayloadAction } from '@reduxjs/toolkit';
import { BUILDER_ACTION_TYPES } from '.';

export type SelectItemPayload = {
    itemId: string;
}

export type SelectItemAction = PayloadAction<
    SelectItemPayload,
    BUILDER_ACTION_TYPES.SELECT_ITEM
>;

export type ClearSelectedAction = PayloadAction<
    undefined,
    BUILDER_ACTION_TYPES.CLEAR_SELECTED
>;