import { BlockSetup } from '../../hooks/useBlockSetup';
import { blockSizeSettings } from '../styleSettings/block';
import { textSizeSettings } from '../styleSettings/text';

export const checkbox: BlockSetup = {
  gridItemSettings: {
    type: 'checkbox',
    attributes: {
      title: {
        label: 'builder.toolBar.attributes.title.label',
        placeholder: 'builder.toolBar.attributes.title.placeholder',
        items: [{ id: '', label: '', value: '' }],
        initialValue: [{ id: '5', label: 'Test', value: 'Title' }],
        style: {
          fontSize:
            textSizeSettings.title.sizes[textSizeSettings.title.selected] || '',
          color: '#ffffff',
        },
      },
      checkbox: {
        label: 'builder.toolBar.attributes.items.label',
        placeholder: 'builder.toolBar.attributes.items.placeholder',
        items: [{ id: '', label: '', value: '' }],
        initialValue: [
          { id: '221', label: 'Test', value: '' },
          { id: '4984', label: 'Test2', value: '' },
        ],
        style: {
          color: '#ffffff',
          checkboxBorderColor: '#ffffff',
          checkboxCheckColor: '#ffffff',
        },
      },
    },
    style: {
      backgroundColor: '#000000',
      borderColor: '#fafafa',
      borderWidth: blockSizeSettings.borderWidth.sizes[blockSizeSettings.borderWidth.selected] || '',
      borderRadius: blockSizeSettings.borderRadius.sizes[blockSizeSettings.borderRadius.selected] || '',
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
