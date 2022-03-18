import { BlockSetup } from '../../hooks/useBlockSetup';
import { blockSizeSettings } from '../styleSettings/block';
import { textSizeSettings } from '../styleSettings/text';

export const textList: BlockSetup = {
  gridItemSettings: {
    type: 'text-list',
    attributes: {
      title: {
        label: 'builder.toolBar.attributes.title.label',
        placeholder: 'builder.toolBar.attributes.title.placeholder',
        items: [{ id: '', label: '', value: '' }],
        initialValue: [{ id: '134', label: 'Test', value: 'Title' }],
        style: {
          fontSize:
            textSizeSettings.title.sizes[textSizeSettings.title.selected] || '',
          color: '#ffffff',
        },
      },
      'text-list': {
        label: 'builder.toolBar.attributes.items.label',
        placeholder: 'builder.toolBar.attributes.items.placeholder',
        items: [{ id: '', label: '', value: '' }],
        initialValue: [
          { id: '441', label: 'Test', value: 'Test' },
          { id: '556', label: 'Test2', value: 'Test' },
        ],
        style: {
          color: '#ffffff',
          fontSize:
            textSizeSettings['text-list'].sizes[
              textSizeSettings['text-list'].selected
            ] || '',
        },
      },
    },
    style: {
      backgroundColor: '#000000',
      borderColor: '#fafafa',
      borderWidth:
        blockSizeSettings.borderWidth.sizes[
          blockSizeSettings.borderWidth.selected
        ] || '',
      borderRadius:
        blockSizeSettings.borderRadius.sizes[
          blockSizeSettings.borderRadius.selected
        ] || '',
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
