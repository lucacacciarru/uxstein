import { IconList } from '../config/styleSettings/icon';

type iconSettingsModel = Partial<{
  icons: IconList;
  selected: keyof IconList;
}>;

export const getIconByValueAndIconSettings = (
  value: string,
  iconSettings: iconSettingsModel,
) => {
  const icons = iconSettings.icons;

  let icon: keyof IconList;
  for (icon in icons) {
    if (icons) {
      if (icons[icon] === value) return icon;
    }
  }
  return iconSettings.selected;
};
