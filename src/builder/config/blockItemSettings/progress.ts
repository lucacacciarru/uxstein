import { BlockSetup } from '../../hooks/useBlockSetup';
import { textSizeSettings } from '../styleSettings/text';

export const progress: BlockSetup = {
  gridItemSettings: {
    type: 'progress',
    attributes: {
      title: {
        label: 'builder.toolBar.attributes.title.label',
        placeholder: 'builder.toolBar.attributes.title.placeholder',
        items: [{ id: '5', label: '', value: '' }],
        initialValue: [{ id: '5', label: 'Test', value: 'Title' }],
        style: {
          fontSize:
            textSizeSettings.title.sizes[textSizeSettings.title.selected] || '',
          color: '#ffffff',
        },
      },
      progress: {
        label: 'builder.toolBar.attributes.items.label',
        placeholder: 'builder.toolBar.attributes.items.placeholder',
        items: [{ id: '221', label: '', value: '' }],
        initialValue: [
          { id: '221', label: 'Test', value: '50' },
          { id: '4984', label: 'Test2', value: '60' },
        ],
        style: {
          color: '#ffffff',
        },
      },
    },
    style: { backgroundColor: '#1b1b1b', color: 'white' },
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
