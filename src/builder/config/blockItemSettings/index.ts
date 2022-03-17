import { BlockSetup } from '../../hooks/useBlockSetup';
import { DraggableBlockType } from '../../components/AddTab/DraggableBlock';
import { text } from './text';
import { progress } from './progress';
import { checkbox } from './checkbox';
import { textList } from './textList';
import { AttributeName, AttributesModel } from '../../store/types';

export const blockItemSettings: Record<DraggableBlockType, BlockSetup> = {
  text,
  progress,
  checkbox,
  'text-list': textList,
  'image-list': {
    gridItemSettings: {
      type: 'image-list',
      attributes: {},
      style: { background: 'red', color: 'white' },
    },
    layoutSettings: {
      h: 1,
      w: 2,
      i: '',
    },
  },
  image: {
    gridItemSettings: {
      type: 'image',
      attributes: {},
      style: { background: 'purple', color: 'white' },
    },
    layoutSettings: {
      h: 2,
      w: 3,
      i: '',
    },
  },
  rate: {
    gridItemSettings: {
      type: 'rate',
      attributes: {},
      style: { background: 'grey', color: 'white' },
    },
    layoutSettings: {
      h: 2,
      w: 2,
      i: '',
    },
  },
};

export const getBlockItemSettings = (type: DraggableBlockType) => ({
  ...blockItemSettings[type],
  layoutSettings: {
    ...blockItemSettings[type].layoutSettings,
    i: Date.now().toString(),
  },
  gridItemSettings: {
    ...blockItemSettings[type].gridItemSettings,
    attributes: populateAttributesValueWithInitial(
      blockItemSettings[type].gridItemSettings.attributes,
    ),
  },
});

const populateAttributesValueWithInitial = (attributes: AttributesModel) => {
  let result: AttributesModel = {};
  let attribute: AttributeName;
  for (attribute in attributes) {
    result = {
      ...result,
      [attribute]: {
        ...attributes[attribute],
        items: attributes[attribute]?.initialValue,
      },
    };
  }
  return result;
};
