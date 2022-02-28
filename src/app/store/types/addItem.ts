import { PayloadAction } from '@reduxjs/toolkit';
import { Layout } from 'react-grid-layout';
import { GridItem } from './general';

export enum ADDITEM_ACTION_TYPES {
    REQUEST = 'builder/add/request',
}

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
    ADDITEM_ACTION_TYPES.REQUEST
>;