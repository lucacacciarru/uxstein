import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce';
import {
  gridGapSizes,
  gridPaddingSizes,
} from '../../../config/styleSettings/globals';
import { fieldLabelsMap } from '../../../config/translationsMaps/fieldLabels';
import { updateGlobalStyle } from '../../../store/actions/update';
import { getGlobalStyle } from '../../../store/selectors/getGlobalStyle';
import { UpdateGlobalStylePayload } from '../../../store/types/update';
import { getSizeByValueAndSizeSettings } from '../../../utils/getSizeByValueAndSizeSettings';
import { SizesModel } from '../../StyleFields/SelectOneSize';

export const usePaddingStyleField = (
  styleKey: 'containerPaddingX' | 'containerPaddingY',
) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const globalStyle = useSelector(getGlobalStyle);

  const label = t(fieldLabelsMap[styleKey]) as string;

  const size = getSizeByValueAndSizeSettings<number>(
    globalStyle[styleKey],
    gridPaddingSizes,
  );

  const [selected, setSelected] = useState<keyof SizesModel<number>>(size);

  const debouncedUpdateValue = useDebouncedCallback(
    (value: UpdateGlobalStylePayload) => {
      dispatch(updateGlobalStyle(value));
    },
    500,
  );

  const select = (size: keyof SizesModel) => {
    setSelected(size);
    const payload = {
      [styleKey]: gridGapSizes.sizes[size],
    };
    debouncedUpdateValue(payload);
  };

  return {
    select,
    selected,
    sizes: gridPaddingSizes.sizes,
    label,
  };
};
