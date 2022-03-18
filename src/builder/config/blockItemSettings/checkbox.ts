import { BlockSetup } from '../../hooks/useBlockSetup';
import { getSelectedSizeValue } from '../../utils/getSelectedSizeValue';
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
          fontSize: getSelectedSizeValue(textSizeSettings.title),
          color: '#ffffff',
        },
      },
      checkbox: {
        label: 'builder.toolBar.attributes.items.label',
        placeholder: 'builder.toolBar.attributes.items.placeholder',
        items: [],
        initialValue: [
          { id: '221', label: 'Skill 1', value: '' },
          { id: '4984', label: 'Skill 2', value: '' },
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
