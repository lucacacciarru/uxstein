import { PayloadAction } from '@reduxjs/toolkit';
import { TEMPLATE_ACTION_TYPES } from './general';

export type PopulateBuilderFromTemplatePayload = {
    templateId: string;
}

export type PopulateBuilderFromTemplateAction = PayloadAction<
    PopulateBuilderFromTemplatePayload,
    TEMPLATE_ACTION_TYPES.POPULATE_BUILDER
>;