import { createReducer } from '@reduxjs/toolkit';
import { BuilderState } from '../types';
import { addItem } from '../actions/addItem';
import { addItemCase } from './addItem';
import { clearSelected, selectItem } from '../actions/selected';
import { selectItemCase } from './selectItem';
import { clearSelectedCase } from './clearSelected';
import { updateAttributeValue } from '../actions/updateAttributeValue';
import { updateAttributeValueCase } from './updateAttributeValue';
import { deleteItem } from '../actions/deleteItem';
import { deleteItemCase } from './deleteItem';
import { updateAttributeStyle } from '../actions/updateAttributeStyle';
import { updateAttributeStyleCase } from './updateAttributeStyle';
import { updateBlockStyleCase } from './updateBlockStyle';
import { updateBlockStyle } from '../actions/updateBlockStyle';
import { updatePageSettingsCase } from './updatePageSettings';
import { updatePageSettings } from '../actions/updatePageSettings';
import { setBuilder } from '../actions/set';
import { setCase } from './set';
import { updateBuilder } from '../actions/update';
import { updateCase } from './update';

const INITIAL_STATE: BuilderState = {
  allIds: [],
  byId: {},
  pageSettings: [],
  personaId: '',
  title: ''
};

export const builderRooorReducer = createReducer(INITIAL_STATE, builder => {
  builder
    .addCase(addItem, addItemCase)
    .addCase(selectItem, selectItemCase)
    .addCase(clearSelected, clearSelectedCase)
    .addCase(updatePageSettings, updatePageSettingsCase)
    .addCase(updateAttributeValue, updateAttributeValueCase)
    .addCase(updateAttributeStyle, updateAttributeStyleCase)
    .addCase(updateBlockStyle, updateBlockStyleCase)
    .addCase(deleteItem, deleteItemCase)
    .addCase(setBuilder, setCase)
    .addCase(updateBuilder, updateCase)
    .addDefaultCase(state => state);
});
