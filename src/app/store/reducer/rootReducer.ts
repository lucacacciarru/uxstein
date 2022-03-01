import { createReducer } from '@reduxjs/toolkit'
import { BuilderState } from '../types'
import { addItemRequest } from '../actions/addItem'
import { addItemCase } from './addItemRequest'
import { getBlockItemSettings } from '../../components/AddTab/blockItemSettings'
import { clearSelected, selectItem } from '../actions/selected'
import { selectItemCase } from './selectItem'
import { clearSelectedCase } from './clearSelected'


const INITIAL_STATE: BuilderState = {
    allIds: ['a'],
    byId: {
        a: getBlockItemSettings('text').gridItemSettings
    },
    pageSettings: [{ i: 'a', x: 0, y: 0, w: 2, h: 2, maxW: 3 }],
}

export const builderRooorReducer = createReducer(INITIAL_STATE, builder => {
    builder
        .addCase(addItemRequest, addItemCase)
        .addCase(selectItem, selectItemCase)
        .addCase(clearSelected, clearSelectedCase)
        .addDefaultCase(state => state)
});