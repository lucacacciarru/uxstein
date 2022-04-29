import { Layout } from 'react-grid-layout';
import { GlobalStyle, GridItem } from '../../../builder/store/types';

export type Template = {
  id: string;
  src: string;
  name: string;
  isDefault: boolean;
  builderData: {
    gridItems: Record<string, GridItem>;
    pageSettings: Layout[];
    globalStyle: GlobalStyle;
  };
};

export type TemplatesData = {
  allIds: string[];
  byId: Record<string, Template>;
};

export type TemplateState = {
  data: TemplatesData;
  rollbackData?: TemplatesData;
};
