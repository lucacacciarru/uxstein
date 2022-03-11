import { createAction } from '@reduxjs/toolkit';
import { BUILDER_ACTION_TYPES } from '../types';
import { UpdateAttributeStylePayload } from '../types/updateAttributeStyle';

export const updateAttributeStyle = createAction<
    UpdateAttributeStylePayload,
    BUILDER_ACTION_TYPES.UPDATE_ATTRIBUTE_STYLE
>(BUILDER_ACTION_TYPES.UPDATE_ATTRIBUTE_STYLE);