import { BlockSetup } from '../../hooks/useBlockSetup';
import { getSelectedSizeValue } from '../../utils/getSelectedSizeValue';
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
          fontSize: getSelectedSizeValue(textSizeSettings.title, {
            defaultReturnValue: '',
          }),
          color: '#ffffff',
        },
      },
      subtitle: {
        label: 'builder.toolBar.attributes.subtitle.label',
        placeholder: 'builder.toolBar.attributes.subtitle.placeholder',
        items: [{ id: '1', value: '' }],
        initialValue: [{ id: '1', value: 'Subtitle' }],
        style: {
          fontSize: getSelectedSizeValue(textSizeSettings.subtitle, {
            defaultReturnValue: '',
          }),
          color: '#ffffff',
          fontStyle: 'italic',
        },
      },
      body: {
        label: 'builder.toolBar.attributes.body.label',
        placeholder: 'builder.toolBar.attributes.body.placeholder',
        items: [{ id: '1', value: '' }],
        initialValue: [
          {
            id: '1',
            value:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et morbi adipiscing leo nibh porttitor diam in nibh malesuada. Sed velit lobortis volutpat, eget.',
          },
        ],
        style: {
          fontSize: getSelectedSizeValue(textSizeSettings.body, {
            defaultReturnValue: '',
          }),
          color: '#ffffff',
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
  optionalSettings: {
    maxW: 3,
  },
};
