import { Layout } from 'react-grid-layout'
import { TranslationKey } from '../../../_shared/types/i18n';
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
    UPDATE_ATTRIBUTE_VALUE = 'builder/update-attribute-value'
}

export type AttributeName = 'title' | 'subtitle' | 'body' | 'image' | 'progress';
export type AttributesModel = Partial<
    Record<AttributeName, SingleItemAttribute | MultipleItemAttribute>
>

export type SingleItemAttribute = {
    label: TranslationKey;
    placeholder: TranslationKey;
    value: string;
    initialValue?: TranslationKey;
    style: {};
}

export type MultipleItemAttribute = {
    label: TranslationKey;
    placeholder: TranslationKey;
    items: { label: string, value?: string }[];
    initialValue?: TranslationKey;
    style: {};
    value: undefined;
}