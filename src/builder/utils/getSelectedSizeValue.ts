import { SizesModel } from '../components/StyleFields/SelectOneSize';

type SizeSettingsModel = {
  sizes: SizesModel;
  selected: keyof SizesModel;
};

export const getSelectedSizeValue = (sizeSettings?: SizeSettingsModel) => {
  return sizeSettings?.sizes[sizeSettings.selected] || '';
};
