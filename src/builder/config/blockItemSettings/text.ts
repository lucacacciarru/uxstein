import { BlockSetup } from '../../hooks/useBlockSetup';
import { textSizeSettings } from '../styleSettings/text';

export const text: BlockSetup = {
  gridItemSettings: {
    type: 'text',
    attributes: {
      title: {
        label: 'builder.toolBar.attributes.title.label',
        placeholder: 'builder.toolBar.attributes.title.placeholder',
        items: [{ value: '' }],
        initialValue: [{ value: 'Title' }],
        style: {
          fontSize: textSizeSettings.title.sizes[textSizeSettings.title.selected] || '',
          color: '#ffffff'
        },
      },
      subtitle: {
        label: 'builder.toolBar.attributes.subtitle.label',
        placeholder: 'builder.toolBar.attributes.subtitle.placeholder',
        items: [{ value: '' }],
        initialValue: [{ value: 'Subtitle' }],
        style: {
          fontSize: textSizeSettings.subtitle.sizes[textSizeSettings.subtitle.selected] || '',
          color: '#ffffff'
        }
      },
    },
    style: { background: 'black', color: 'white' },
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
