import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce';
import { textSizeSettings } from '../../config/styleSettings/text';
import { updateAttributeStyle } from '../../store/actions/updateAttributeStyle';
import { getAttributeByNameAndId } from '../../store/selectors/getAttributeByNameAndId';
import { AttributeName } from '../../store/types';
import { getSizeByValueAndSizeSettings } from '../../utils/getSizeByValueAndSizeSettings';
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

  const sizeSettings = useMemo(() => {
    return textSizeSettings[attributeName as keyof typeof textSizeSettings];
  }, [attributeName]);

  const selectedValue =
    useSelector(getAttributeByNameAndId(attributeName, blockItemId))?.style
      .fontSize || '';

  const selectedSize = useMemo(() => {
    return getSizeByValueAndSizeSettings(selectedValue, sizeSettings);
  }, [selectedValue, sizeSettings]);

  const [selected, setSelected] = useState<keyof SizesModel>(selectedSize);

  const debouncedUpdateValue = useDebouncedCallback(value => {
    dispatch(updateAttributeStyle(value));
  }, 500);

  const select = (size: keyof SizesModel) => {
    setSelected(size);
    const newStyle = { [styleKey]: sizeSettings.sizes[size] };
    const payload = {
      attributeToUpdate: attributeName,
      blockId: blockItemId,
      style: newStyle,
    };
    debouncedUpdateValue(payload);
  };

  return {
    label,
    select,
    sizes: sizeSettings.sizes,
    selected,
  };
};
