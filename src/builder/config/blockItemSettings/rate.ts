import { BlockSetup } from '../../hooks/useBlockSetup';
import { getSelectedSizeValue } from '../../utils/getSelectedSizeValue';
import { blockSizeSettings } from '../styleSettings/block';
import { textSizeSettings } from '../styleSettings/text';
import { icon } from '../styleSettings/icon';

export const rate: BlockSetup = {
  gridItemSettings: {
    type: 'rate',
    attributes: {
      title: {
        label: 'builder.toolBar.attributes.title.label',
        placeholder: 'builder.toolBar.attributes.title.placeholder',
        items: [{ id: '5', label: '', value: '' }],
        initialValue: [{ id: '5', label: 'Test', value: 'Title' }],
        style: {
          fontSize: getSelectedSizeValue(textSizeSettings.title),
          color: '#ffffff',
        },
      },
      rate: {
        label: 'builder.toolBar.attributes.items.label',
        placeholder: 'builder.toolBar.attributes.items.placeholder',
        items: [],
        initialValue: [
          { id: '221', label: 'Rate 1', value: '2' },
          { id: '4984', label: 'Rate 2', value: '4' },
        ],
        style: {
          color: '#ffffff',
          fontSize: getSelectedSizeValue(textSizeSettings.rate),

          colorRateIcon: '#ffffff',
          icon: icon.rate.selected || '',
        },
      },
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
