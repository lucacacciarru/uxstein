import { PayloadAction } from '@reduxjs/toolkit';
import { BUILDER_ACTION_TYPES } from '.';
import { AttributeName } from './general';

export type UpdateAttributeValuePayload = {
    blockId: string;
    attributeToUpdate: AttributeName;
    value: string;
}

export type UpdateAttributeValueAction = PayloadAction<
    UpdateAttributeValuePayload,
    BUILDER_ACTION_TYPES.UPDATE_ATTRIBUTE_VALUE
>;