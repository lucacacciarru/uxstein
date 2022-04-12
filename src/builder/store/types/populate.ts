import { PayloadAction } from '@reduxjs/toolkit';
import { BUILDER_ACTION_TYPES, BuilderEntityType } from './general';

export type PopulateBuilderPayload = {
    entityId: string;
    entityType: BuilderEntityType;
}

export type PopulateBuilderAction = PayloadAction<
    PopulateBuilderPayload,
    BUILDER_ACTION_TYPES.POPULATE
>;
