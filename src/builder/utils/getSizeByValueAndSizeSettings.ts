import { SizesModel } from '../components/StyleFields/SelectOneSize';

type SizeSettingsModel = {
  sizes: SizesModel;
  selected: keyof SizesModel;
};

export const getSizeByValueAndSizeSettings = (
  value: string,
  sizeSettings: SizeSettingsModel,
) => {
  const sizes = sizeSettings.sizes;

  let size: keyof SizesModel;
  for (size in sizes) {
    if (sizes[size] === value) {
      return size;
    }
  }
  return sizeSettings.selected;
};
