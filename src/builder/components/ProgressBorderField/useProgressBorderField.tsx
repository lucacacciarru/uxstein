import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce';
import { borderItemSettings } from '../../config/styleSettings/borderItem';
import { updateAttributeStyle } from '../../store/actions/updateAttributeStyle';
import { AttributeName } from '../../store/types';
import { useBorderField } from '../BorderField/useBorderField';
import { SizesModel } from '../StyleFields/SelectOneSize';

type Params = {
  styleKey: string;
  blockItemId: string;
  attributeToUpdate: AttributeName;
};

export function useProgressBorderField({
  styleKey,
  blockItemId,
  attributeToUpdate,
}: Params) {
  const dispatch = useDispatch();
  const { label } = useBorderField({ styleKey, blockItemId });
  const sizeSettings = borderItemSettings[styleKey];

  const [selected, setSelected] = useState<keyof SizesModel>(
    sizeSettings.selected,
  );

  const debouncedUpdateValue = useDebouncedCallback(value => {
    dispatch(updateAttributeStyle(value));
  }, 500);

  const select = (size: keyof SizesModel) => {
    setSelected(size);
    const newStyle = { [styleKey]: sizeSettings.sizes[size] };
    const payload = {
      blockId: blockItemId,
      style: newStyle,
      attributeToUpdate,
    };
    debouncedUpdateValue(payload);
  };
  return {
    label,
    select,
    selected,
    sizes: sizeSettings.sizes,
  };
}
