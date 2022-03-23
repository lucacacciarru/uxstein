import { BlockSetup } from '../../hooks/useBlockSetup';
import { DraggableBlockType } from '../../components/AddTab/DraggableBlock';
import { text } from './text';
import { progress } from './progress';
import { checkbox } from './checkbox';
import { textList } from './textList';
import { rate } from './rate';
import { image } from './image';
import { imageList } from './imageList';
import { AttributeName, AttributesModel } from '../../store/types';

export const blockItemSettings: Record<DraggableBlockType, BlockSetup> = {
  text,
  progress,
  checkbox,
  rate,
  'text-list': textList,
  image,
  'image-list': imageList
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
