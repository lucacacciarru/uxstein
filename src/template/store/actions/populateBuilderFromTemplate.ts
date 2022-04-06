import { createAction } from '@reduxjs/toolkit';
import { TEMPLATE_ACTION_TYPES } from '../types/general';
import { PopulateBuilderFromTemplatePayload } from '../types/populateBuilderFromTemplate';

export const populateBuilderFromTemplateTrigger = createAction<
    PopulateBuilderFromTemplatePayload,
    TEMPLATE_ACTION_TYPES.POPULATE_BUILDER
>(TEMPLATE_ACTION_TYPES.POPULATE_BUILDER);