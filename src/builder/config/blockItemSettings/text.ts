import { BlockSetup } from '../../hooks/useBlockSetup';
import { blockSizeSettings } from '../styleSettings/block';
import { textSizeSettings } from '../styleSettings/text';

export const text: BlockSetup = {
  gridItemSettings: {
    type: 'text',
    attributes: {
      title: {
        label: 'builder.toolBar.attributes.title.label',
        placeholder: 'builder.toolBar.attributes.title.placeholder',
        items: [{ id: '1', value: '' }],
        initialValue: [{ id: '1', value: 'Title' }],
        style: {
          fontSize:
            textSizeSettings.title.sizes[textSizeSettings.title.selected] || '',
          color: '#ffffff',
        },
      },
      subtitle: {
        label: 'builder.toolBar.attributes.subtitle.label',
        placeholder: 'builder.toolBar.attributes.subtitle.placeholder',
        items: [{ id: '1', value: '' }],
        initialValue: [{ id: '1', value: 'Subtitle' }],
        style: {
          fontSize:
            textSizeSettings.subtitle.sizes[
            textSizeSettings.subtitle.selected
            ] || '',
          color: '#ffffff',
          fontStyle: 'italic'
        },
      },
      body: {
        label: 'builder.toolBar.attributes.body.label',
        placeholder: 'builder.toolBar.attributes.body.placeholder',
        items: [{ id: '1', value: '' }],
        initialValue: [{ id: '1', value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et morbi adipiscing leo nibh porttitor diam in nibh malesuada. Sed velit lobortis volutpat, eget.' }],
        style: {
          fontSize: textSizeSettings.body.sizes[textSizeSettings.body.selected] || '',
          color: '#ffffff'
        }
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
