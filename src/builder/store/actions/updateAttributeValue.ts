import { createAction } from '@reduxjs/toolkit';
import { BUILDER_ACTION_TYPES } from '../types';
import { UpdateAttributeValuePayload } from '../types/updateAttributeValue';

export const updateAttributeValue = createAction<
    UpdateAttributeValuePayload,
    BUILDER_ACTION_TYPES.UPDATE_ATTRIBUTE_VALUE
>(BUILDER_ACTION_TYPES.UPDATE_ATTRIBUTE_VALUE);