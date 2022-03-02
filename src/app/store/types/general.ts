import { Layout } from 'react-grid-layout'
import { DraggableBlockType } from '../../components/AddTab/DraggableBlock'

export type GridItem = {
    type: DraggableBlockType;
    attributes: {};
    style: {};
}

export type BuilderState = {
    allIds: string[];
    byId: Record<string, GridItem>;
    pageSettings: Layout[];
    selectedBlockId?: string;
}

export enum BUILDER_ACTION_TYPES {
    ADD = 'builder/add',
    SELECT_ITEM = 'builder/select-item',
    CLEAR_SELECTED = 'builder/clear-selected',
}