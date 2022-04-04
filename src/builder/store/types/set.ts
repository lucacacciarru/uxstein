import { PayloadAction } from '@reduxjs/toolkit';
import { Layout } from 'react-grid-layout';
import { BUILDER_ACTION_TYPES } from '.';
import { GridItem } from './general';


export type SetPayload = {
    gridItems: Record<string, GridItem>;
    pageSettings: Layout[];
    personaId: string;
    title: string;
}

export type SetAction = PayloadAction<
    SetPayload,
    BUILDER_ACTION_TYPES.SET
>;