import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce';
import { blockSizeSettings } from '../../config/styleSettings/block';
import { fieldLabelsMap } from '../../config/translationsMaps/fieldLabels';
import { updateBlockStyle } from '../../store/actions/updateBlockStyle';
import { getGridItemById } from '../../store/selectors/getGridItemById';
import { getSizeByValueAndSizeSettings } from '../../utils/getSizeByValueAndSizeSettings';
import { SizesModel } from '../StyleFields/SelectOneSize';

type Params = {
  styleKey: string;
  blockItemId: string;
};

export const useBorderField = ({ styleKey, blockItemId }: Params) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const label = t(fieldLabelsMap[styleKey]) as string;

  const sizeSettings = blockSizeSettings[styleKey];

  const selectedValue = useSelector(getGridItemById(blockItemId))?.style[
    styleKey
  ];

  const selectedSize = useMemo(() => {
    return getSizeByValueAndSizeSettings(selectedValue, sizeSettings);
  }, [selectedValue, sizeSettings]);

  const [selected, setSelected] = useState<keyof SizesModel>(
    sizeSettings.selected,
  );

  const debouncedUpdateValue = useDebouncedCallback(value => {
    dispatch(updateBlockStyle(value));
  }, 500);

  const select = (size: keyof SizesModel) => {
    setSelected(size);
    const newStyle = { [styleKey]: sizeSettings.sizes[size] };
    const payload = {
      blockId: blockItemId,
      style: newStyle,
    };
    debouncedUpdateValue(payload);
  };

  useEffect(() => {
    setSelected(selectedSize);
  }, [selectedSize]);

  return {
    label,
    selected,
    select,
    sizes: sizeSettings.sizes,
  };
};
