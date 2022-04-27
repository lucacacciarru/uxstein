import { SizesModel } from '../../components/StyleFields/SelectOneSize';
import { GlobalStyle } from '../../store/types';
import { getSelectedSizeValue } from '../../utils/getSelectedSizeValue';

type GridGapSizes = {
  sizes: SizesModel<number>;
  selected: keyof SizesModel;
};

const gridGap: GridGapSizes = {
  sizes: { s: 10, m: 45, l: 70, none: 0 },
  selected: 'none',
};

export const globalStyles: GlobalStyle = {
  backgroundColor: '#dadada',
  columnGap: getSelectedSizeValue<number>(gridGap, {
    defaultReturnValue: 0,
  }),
  rowGap: getSelectedSizeValue<number>(gridGap, {
    defaultReturnValue: 0,
  }),
};
