import { BlockSetup } from '../../hooks/useBlockSetup';
import { getSelectedSizeValue } from '../../utils/getSelectedSizeValue';
import { blockSizeSettings } from '../styleSettings/block';
import { borderItemSettings } from '../styleSettings/borderItem';
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
            getSelectedSizeValue(textSizeSettings.title),
          color: '#ffffff',
        },
      },
      progress: {
        label: 'builder.toolBar.attributes.items.label',
        placeholder: 'builder.toolBar.attributes.items.placeholder',
        items: [],
        initialValue: [
          { id: '221', label: 'Skill 1', value: '50' },
          { id: '4984', label: 'Skill 2', value: '60' },
        ],
        style: {
          color: '#ffffff',
          progressBarFilledTrackBackgroundColor: '#E5E5E5',
          progressBarTrackBackgroundColor: '#05C46B',
          progressBarBorderColor: '#1b1b1b',
          progressBarBorderWidth:
            getSelectedSizeValue(borderItemSettings.progressBarBorderWidth),
          progressBarBorderRadius:
            getSelectedSizeValue(borderItemSettings.progressBarBorderRadius),
        },
      },
    },
    style: {
      backgroundColor: '#000000',
      borderColor: '#fafafa',
      borderWidth:
        getSelectedSizeValue(blockSizeSettings.borderWidth),
      borderRadius:
        getSelectedSizeValue(blockSizeSettings.borderRadius),
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
