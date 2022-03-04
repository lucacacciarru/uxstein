import { PayloadAction } from '@reduxjs/toolkit';
import { Layout } from 'react-grid-layout';
import { BUILDER_ACTION_TYPES } from '.';
import { GridItem } from './general';

export type ItemModel = {
    layoutSettings: Layout;
    gridItemSettings: GridItem;
}

export type AddItemPayload = {
    item: ItemModel;
    pageSettings: Layout[];
}

export type AddItemAction = PayloadAction<
    AddItemPayload,
    BUILDER_ACTION_TYPES.ADD
>;