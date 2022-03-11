import { createReducer } from '@reduxjs/toolkit';
import { BuilderState } from '../types';
import { addItem } from '../actions/addItem';
import { addItemCase } from './addItem';
import { getBlockItemSettings } from '../../config/blockItemSettings';
import { clearSelected, selectItem } from '../actions/selected';
import { selectItemCase } from './selectItem';
import { clearSelectedCase } from './clearSelected';
import { updateAttributeValue } from '../actions/updateAttributeValue';
import { updateAttributeValueCase } from './updateAttributeValue';
import { deleteItem } from '../actions/deleteItem';
import { deleteItemCase } from './deleteItem';
import { updateAttributeStyle } from '../actions/updateAttributeStyle';
import { updateAttributeStyleCase } from './updateAttributeStyle';

const INITIAL_STATE: BuilderState = {
  allIds: ['a'],
  byId: {
    a: getBlockItemSettings('text').gridItemSettings,
  },
  pageSettings: [{ i: 'a', x: 0, y: 0, w: 2, h: 2, maxW: 3 }],
};

export const builderRooorReducer = createReducer(INITIAL_STATE, builder => {
  builder
    .addCase(addItem, addItemCase)
    .addCase(selectItem, selectItemCase)
    .addCase(clearSelected, clearSelectedCase)
    .addCase(updateAttributeValue, updateAttributeValueCase)
    .addCase(updateAttributeStyle, updateAttributeStyleCase)
    .addCase(deleteItem, deleteItemCase)
    .addDefaultCase(state => state);
});
