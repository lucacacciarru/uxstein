import { PayloadAction } from '@reduxjs/toolkit';
import { BUILDER_ACTION_TYPES } from '.';
import { AttributeName } from './general';

export type UpdateAttributeStylePayload = {
    blockId: string;
    attributeToUpdate: AttributeName;
    style: Record<string, string>;
}

export type UpdateAttributeStyleAction = PayloadAction<
    UpdateAttributeStylePayload,
    BUILDER_ACTION_TYPES.UPDATE_ATTRIBUTE_STYLE
>;