import { Layout } from 'react-grid-layout';
import { TranslationKey } from '../../../_shared/types/i18n';
import { DraggableBlockType } from '../../components/AddTab/DraggableBlock';

export type GridItem = {
  type: DraggableBlockType;
  attributes: AttributesModel;
  style: Record<string, string>;
};

export type BuilderEntityType = '' | 'persona' | 'template';

export type GlobalStyle = {
  backgroundColor: string;
  columnGap: number;
  rowGap: number;
  containerPaddingX: number;
  containerPaddingY: number;
};

export type BuilderState = {
  allIds: string[];
  byId: Record<string, GridItem>;
  pageSettings: Layout[];
  selectedBlockId?: string;
  entityId: string;
  entityType: BuilderEntityType;
  title: string;
  globalStyle: GlobalStyle;
  isDirty?: boolean;
};

export enum BUILDER_ACTION_TYPES {
  ADD = 'builder/add',
  SELECT_ITEM = 'builder/select-item',
  CLEAR_SELECTED = 'builder/clear-selected',
  DELETE = 'builder/delete',
  SET = 'builder/set',
  POPULATE = 'builder/populate/trigger',
  RESET = 'builder/reset',
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
