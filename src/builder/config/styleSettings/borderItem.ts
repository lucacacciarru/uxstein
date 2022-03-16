import { SizesModel } from '../../components/StyleFields/SelectOneSize';

export type BorderItemModel = Record<
  string,
  { sizes: SizesModel; selected: keyof SizesModel }
>;

export const borderItemSettings: BorderItemModel = {
  progressBarBorderWidth: {
    sizes: { s: '0.5px', m: '1px', l: '3px', none: '0px' },
    selected: 'none',
  },
  progressBarBorderRadius: {
    sizes: { s: '2px', m: '5px', l: '10px', none: '0px' },
    selected: 's',
  },
};
