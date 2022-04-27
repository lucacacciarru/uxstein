import { PayloadAction } from '@reduxjs/toolkit';
import { Layout } from 'react-grid-layout';
import {
  AttributeName,
  BuilderState,
  GlobalStyle,
  ItemAttribute,
} from './general';

export enum UPDATE_ACTION_TYPES {
  UPDATE = 'builder/update',
  ATTRIBUTE_STYLE = 'builder/update/attribute-style',
  ATTRIBUTE_VALUE = 'builder/update/attribute-value',
  BLOCK_STYLE = 'builder/update/block-style',
  PAGE_SETTINGS = 'builder/update/page-settings',
  LAYOUT = 'builder/update/layout',
  GLOBAL_STYLE = 'builder/update/global-style',
}

export type UpdatePayload = Partial<BuilderState>;
export type UpdateAction = PayloadAction<
  UpdatePayload,
  UPDATE_ACTION_TYPES.UPDATE
>;

export type UpdateAttributeStylePayload = {
  blockId: string;
  attributeToUpdate: AttributeName;
  style: Record<string, string>;
};
export type UpdateAttributeStyleAction = PayloadAction<
  UpdateAttributeStylePayload,
  UPDATE_ACTION_TYPES.ATTRIBUTE_STYLE
>;

export type UpdateAttributeValuePayload = {
  blockId: string;
  attributeToUpdate: AttributeName;
  items: ItemAttribute['items'];
};
export type UpdateAttributeValueAction = PayloadAction<
  UpdateAttributeValuePayload,
  UPDATE_ACTION_TYPES.ATTRIBUTE_VALUE
>;

export type UpdateBlockStylePayload = {
  blockId: string;
  style: Record<string, string>;
};
export type UpdateBlockStyleAction = PayloadAction<
  UpdateBlockStylePayload,
  UPDATE_ACTION_TYPES.BLOCK_STYLE
>;

export type UpdatePageSettingsPayload = {
  pageSettings: Layout[];
};
export type UpdatePageSettingsAction = PayloadAction<
  UpdatePageSettingsPayload,
  UPDATE_ACTION_TYPES.PAGE_SETTINGS
>;

export type UpdateLayoutPayload = {
  id: string;
  properties: Partial<Layout>;
};
export type UpdateLayoutAction = PayloadAction<
  UpdateLayoutPayload,
  UPDATE_ACTION_TYPES.LAYOUT
>;

export type UpdateGlobalStylePayload = Partial<GlobalStyle>;
export type UpdateGlobalStyleAction = PayloadAction<
  UpdateGlobalStylePayload,
  UPDATE_ACTION_TYPES.GLOBAL_STYLE
>;
