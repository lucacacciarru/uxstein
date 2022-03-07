import { createSelector } from '@reduxjs/toolkit';
import { getGridItemById } from './getGridItemById';
import { AttributeName, GridItem } from '../types';

export const getAttributeByNameAndId = (name: AttributeName, id: string) => createSelector(
    getGridItemById(id),
    (gridItem: GridItem) => gridItem.attributes[name]
)