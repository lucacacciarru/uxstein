import { Layout } from 'react-grid-layout'
import { DraggableBlockType } from '../../components/AddTab/DraggableBlock'

export type GridItem = {
    type: DraggableBlockType;
    attributes: AttributesModel;
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

export type AttributeName = 'title' | 'subtitle' | 'body' | 'image' | 'progress';
export type AttributesModel = Partial<
    Record<AttributeName, SingleItemAttribute | MultipleItemAttribute>
>

type SingleItemAttribute = {
    label: string;
    placeholder: string;
    value: string;
    style: {};
}

type MultipleItemAttribute = {
    label: string;
    placeholder: string;
    items: { label: string, value?: string }[];
    style: {};
}