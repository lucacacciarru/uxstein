import { SizesModel } from '../../components/StyleFields/SelectOneSize';
import { GlobalStyle } from '../../store/types';
import { getSelectedSizeValue } from '../../utils/getSelectedSizeValue';

type GridGapSizes = {
  sizes: SizesModel<number>;
  selected: keyof SizesModel;
};

export const gridGapSizes: GridGapSizes = {
  sizes: { s: 10, m: 45, l: 70, none: 0 },
  selected: 'none',
};

export const gridPaddingSizes: GridGapSizes = {
  sizes: { s: 10, m: 45, l: 60, none: 0 },
  selected: 'none',
};

export const globalStyles: GlobalStyle = {
  backgroundColor: '#ffffff',
  columnGap: getSelectedSizeValue<number>(gridGapSizes, {
    defaultReturnValue: 0,
  }),
  rowGap: getSelectedSizeValue<number>(gridGapSizes, {
    defaultReturnValue: 0,
  }),
  containerPaddingX: getSelectedSizeValue<number>(gridPaddingSizes, {
    defaultReturnValue: 0,
  }),
  containerPaddingY: getSelectedSizeValue<number>(gridPaddingSizes, {
    defaultReturnValue: 0,
  }),
};

export const gridSettings = {
  rowsNumber: 5,
  colsNumber: 6,
  pageHeight: 800,
};
