import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce';
import { textSizeSettings } from '../../config/styleSettings/text';
import { updateAttributeStyle } from '../../store/actions/updateAttributeStyle';
import { AttributeName } from '../../store/types';
import { SizesModel } from '../StyleFields/SelectOneSize';

type Props = {
  attributeName: AttributeName;
  styleKey: string;
  blockItemId: string;
};

export const useFontSizeField = ({
  attributeName,
  styleKey,
  blockItemId,
}: Props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const label = t(`builder.toolBar.style.labels.fontSize`);

  const sizeSettings =
    textSizeSettings[attributeName as keyof typeof textSizeSettings];

  const [selected, setSelected] = useState<keyof SizesModel>(
    sizeSettings.selected,
  );

  const select = (size: keyof SizesModel) => {
    setSelected(size);
    const newStyle = { [styleKey]: sizeSettings.sizes[size] || '' };
    const payload = {
      attributeToUpdate: attributeName,
      blockId: blockItemId,
      style: newStyle,
    };
    debouncedUpdateValue(payload);
  };

  const debouncedUpdateValue = useDebouncedCallback(value => {
    dispatch(updateAttributeStyle(value));
  }, 500);

  return {
    label,
    select,
    sizes: sizeSettings.sizes,
    selected,
  };
};
