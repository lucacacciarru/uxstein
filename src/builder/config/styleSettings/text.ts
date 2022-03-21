import { SizesModel } from '../../components/StyleFields/SelectOneSize';

type TextSizesSettingsModel = Record<
  'title' | 'body' | 'subtitle' | 'text-list' | 'rate',
  {
    sizes: SizesModel;
    selected: keyof SizesModel;
  }
>;

export const textSizeSettings: TextSizesSettingsModel = {
  title: {
    sizes: { s: '33px', m: '35px', l: '40px' },
    selected: 'l',
  },
  subtitle: {
    sizes: { s: '16px', m: '18px', l: '20px' },
    selected: 'm',
  },
  body: {
    sizes: { s: '12px', m: '13px', l: '14px' },
    selected: 'm',
  },
  'text-list': {
    sizes: { s: '15px', m: '17px', l: '19px' },
    selected: 'm',
  },
  rate: {
    sizes: { s: '15px', m: '17px', l: '19px' },
    selected: 'm',
  },
};
