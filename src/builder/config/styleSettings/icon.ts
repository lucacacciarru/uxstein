import { IconComponentModel } from '../../../_shared/components';

export type IconList = Record<string, keyof IconComponentModel>;

export type IconSettingsModel = Record<
  string,
  Partial<{
    icons: IconList;
    selected: keyof IconComponentModel;
  }>
>;

export const icon: IconSettingsModel = {
  rate: {
    icons: {
      Heart: 'Heart',
      Star: 'Star',
      Smile: 'Smile',
      Hexagon: 'Hexagon',
      Like: 'Like',
      Ellipse: 'Ellipse',
      Square: 'Square',
    },
    selected: 'Heart',
  },
};
