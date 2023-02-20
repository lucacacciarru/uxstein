import { BlockSetup } from '../../hooks/useBlockSetup';
import { getSelectedSizeValue } from '../../utils/getSelectedSizeValue';
import { blockSizeSettings } from '../styleSettings/block';
import { textSizeSettings } from '../styleSettings/text';

export const imageList: BlockSetup = {
  gridItemSettings: {
    type: 'image-list',
    attributes: {
      title: {
        label: 'builder.toolBar.attributes.title.label',
        placeholder: 'builder.toolBar.attributes.title.placeholder',
        items: [{ id: '1', value: '' }],
        initialValue: [{ id: '1', value: 'Title' }],
        style: {
          fontSize: getSelectedSizeValue(textSizeSettings.title, {
            defaultReturnValue: '',
          }),
          color: '#ffffff',
        },
      },
      'image-list': {
        label: 'builder.toolBar.attributes.image.label',
        placeholder: 'builder.toolBar.attributes.image.placeholder',
        items: [],
        initialValue: [{ id: '1', value: '' }],
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
