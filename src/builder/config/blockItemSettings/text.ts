import { BlockSetup } from '../../hooks/useBlockSetup';

export const text: BlockSetup = {
  gridItemSettings: {
    type: 'text',
    attributes: {
      title: {
        label: 'builder.toolBar.attributes.title.label',
        placeholder: 'builder.toolBar.attributes.title.placeholder',
        items: [{ value: '' }],
        initialValue: [{ value: 'titolo' }],
        style: {},
      },
      subtitle: {
        label: 'builder.toolBar.attributes.subtitle.label',
        placeholder: 'builder.toolBar.attributes.subtitle.placeholder',
        items: [{ value: '' }],
        initialValue: [{ value: 'sottotitolo' }],
        style: {},
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
