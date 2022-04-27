import { SizesModel } from '../components/StyleFields/SelectOneSize';

type SizeSettingsModel<T = string> = {
  sizes: SizesModel<T>;
  selected: keyof SizesModel;
};

export const getSelectedSizeValue = <T>(
  sizeSettings?: SizeSettingsModel<T>,
  options?: { defaultReturnValue: any },
): T => {
  return (
    sizeSettings?.sizes[sizeSettings.selected] || options?.defaultReturnValue
  );
};
