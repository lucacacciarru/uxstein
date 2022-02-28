import { createReducer } from '@reduxjs/toolkit'
import { BuilderState } from '../types'
import { addItemRequest } from '../actions/addItem'
import { addItemRequestCase } from './addItemRequest'
import { getBlockItemSettings } from '../../components/AddTab/blockItemSettings'


const INITIAL_STATE: BuilderState = {
    allIds: ['a'],
    byId: {
        a: getBlockItemSettings('text').gridItemSettings
    },
    pageSettings: [{ i: 'a', x: 0, y: 0, w: 2, h: 2, maxW: 3 }],
}

export const builderRooorReducer = createReducer(INITIAL_STATE, builder => {
    builder
        .addCase(addItemRequest, addItemRequestCase)
        .addDefaultCase(state => state)
});