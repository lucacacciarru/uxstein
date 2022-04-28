import { SizesModel } from '../components/StyleFields/SelectOneSize';

type SizeSettingsModel<T = string> = {
  sizes: SizesModel<T>;
  selected: keyof SizesModel<T>;
};

export const getSizeByValueAndSizeSettings = <T = string>(
  value: T,
  sizeSettings: SizeSettingsModel<T>,
) => {
  const sizes = sizeSettings.sizes;

  let size: keyof SizesModel<T>;
  for (size in sizes) {
    if (sizes[size] === value) {
      return size;
    }
  }
  return sizeSettings.selected;
};
