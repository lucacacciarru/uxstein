import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce';
import { borderItemSettings } from '../../config/styleSettings/borderItem';
import { fieldLabelsMap } from '../../config/translationsMaps/fieldLabels';
import { updateAttributeStyle } from '../../store/actions/updateAttributeStyle';
import { AttributeName } from '../../store/types';
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
  const { t } = useTranslation();
  const label = t(fieldLabelsMap[styleKey]) as string;

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
