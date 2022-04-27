import { createReducer } from '@reduxjs/toolkit';
import { BuilderState } from '../types';
import { addItem } from '../actions/addItem';
import { addItemCase } from './addItem';
import { clearSelected, selectItem } from '../actions/selected';
import { selectItemCase } from './selectItem';
import { clearSelectedCase } from './clearSelected';
import { deleteItem } from '../actions/deleteItem';
import { deleteItemCase } from './deleteItem';
import { setBuilder } from '../actions/set';
import { setCase } from './set';
import {
  updateAttributeStyle,
  updateAttributeValue,
  updateBlockStyle,
  updateBuilder,
  updateGlobalStyle,
  updateLayout,
  updatePageSettings,
} from '../actions/update';
import * as updateCases from './update';
import { resetBuilder } from '../actions/reset';
import { resetCase } from './reset';
import { globalStyles } from '../../config/styleSettings/globals';

export const INITIAL_STATE: BuilderState = {
  allIds: [],
  byId: {},
  pageSettings: [],
  entityId: '',
  entityType: '',
  title: '',
  globalStyle: globalStyles,
};

export const builderRootReducer = createReducer(INITIAL_STATE, builder => {
  builder
    .addCase(addItem, addItemCase)
    .addCase(selectItem, selectItemCase)
    .addCase(clearSelected, clearSelectedCase)
    .addCase(updateBuilder, updateCases.updateCase)
    .addCase(updatePageSettings, updateCases.updatePageSettingsCase)
    .addCase(updateAttributeValue, updateCases.updateAttributeValueCase)
    .addCase(updateAttributeStyle, updateCases.updateAttributeStyleCase)
    .addCase(updateBlockStyle, updateCases.updateBlockStyleCase)
    .addCase(updateLayout, updateCases.updateLayoutCase)
    .addCase(updateGlobalStyle, updateCases.updateGlobalStyleCase)
    .addCase(deleteItem, deleteItemCase)
    .addCase(setBuilder, setCase)
    .addCase(resetBuilder, resetCase)
    .addDefaultCase(state => state);
});
