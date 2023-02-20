import { BlockSetup } from '../../hooks/useBlockSetup';
import { getSelectedSizeValue } from '../../utils/getSelectedSizeValue';
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
          fontSize: getSelectedSizeValue(textSizeSettings.title, {
            defaultReturnValue: '',
          }),
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
          fontSize: getSelectedSizeValue(textSizeSettings['text-list'], {
            defaultReturnValue: '',
          }),
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
