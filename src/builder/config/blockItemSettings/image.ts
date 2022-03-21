import { BlockSetup } from '../../hooks/useBlockSetup';
import { getSelectedSizeValue } from '../../utils/getSelectedSizeValue';
import { blockSizeSettings } from '../styleSettings/block';

export const image: BlockSetup = {
  gridItemSettings: {
    type: 'image',
    attributes: {
      image: {
        label: 'builder.toolBar.attributes.image.label',
        placeholder: 'builder.toolBar.attributes.image.placeholder',
        items: [],
        initialValue: [{ id: '', value: '' }],
        style: {}
      }
    },
    style: {
      backgroundColor: '#000000',
      borderColor: '#fafafa',
      borderWidth: getSelectedSizeValue(blockSizeSettings.borderWidth),
      borderRadius: getSelectedSizeValue(blockSizeSettings.borderRadius),
    },
  },
  layoutSettings: {
    h: 2,
    w: 2,
    i: '',
  },
  optionalSettings: {
    maxW: 3,
  },
};
