import { Layout } from 'react-grid-layout'
import { BlockItemType } from '../../components/AddTab/BlockItem'

export type GridItem = {
    type: BlockItemType;
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