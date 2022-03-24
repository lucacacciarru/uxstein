import { Layout } from 'react-grid-layout';
import { TranslationKey } from '../../../_shared/types/i18n';
import { DraggableBlockType } from '../../components/AddTab/DraggableBlock';

export type GridItem = {
  type: DraggableBlockType;
  attributes: AttributesModel;
  style: Record<string, string>;
};

export type BuilderState = {
  allIds: string[];
  byId: Record<string, GridItem>;
  pageSettings: Layout[];
  selectedBlockId?: string;
};

export enum BUILDER_ACTION_TYPES {
  ADD = 'builder/add',
  SELECT_ITEM = 'builder/select-item',
  CLEAR_SELECTED = 'builder/clear-selected',
  UPDATE_PAGE_SETTINGS = 'builder/update/page-settings',
  UPDATE_ATTRIBUTE_VALUE = 'builder/update/attribute-value',
  UPDATE_ATTRIBUTE_STYLE = 'builder/update/attribute-style',
  UPDATE_BLOCK_STYLE = 'builder/update/block-style',
  DELETE = 'builder/delete',
}

export type AttributeName =
  | 'title'
  | 'subtitle'
  | 'body'
  | 'image'
  | 'image-list'
  | 'progress'
  | 'checkbox'
  | 'text-list'
  | 'rate';
export type AttributesModel = Partial<Record<AttributeName, ItemAttribute>>;

export type ItemAttribute = {
  label: TranslationKey;
  placeholder: TranslationKey;
  items: { id: string; label?: string; value: string }[];
  initialValue: { id: string; label?: string; value: string }[];
  style: Record<string, string>;
};
