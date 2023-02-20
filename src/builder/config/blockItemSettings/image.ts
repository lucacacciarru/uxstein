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
        style: {
          objectFit: 'contain',
        },
      },
    },
    style: {
      backgroundColor: '#000000',
      borderColor: '#fafafa',
      borderWidth: getSelectedSizeValue(blockSizeSettings.borderWidth, {
        defaultReturnValue: '',
      }),
      borderRadius: getSelectedSizeValue(blockSizeSettings.borderRadius, {
        defaultReturnValue: '',
      }),
    },
  },
  layoutSettings: {
    h: 2,
    w: 2,
    i: '',
  },
};
