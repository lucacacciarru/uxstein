import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { updateAttributeStyle } from '../../store/actions/update';
import { AttributeName } from '../../store/types';

type Params = {
  attributeName: AttributeName;
  styleKey: string;
  styleValue: string;
  blockItemId: string;
};

export const useObjectFitStyleField = ({
  attributeName,
  styleKey,
  styleValue,
  blockItemId,
}: Params) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [selected, setSelected] = useState(styleValue);

  const label = t('builder.toolBar.style.labels.objectFit');
  const buttonContain = t('builder.toolBar.style.buttons.contain');
  const buttonCover = t('builder.toolBar.style.buttons.cover');

  const select = (objectFitValue: 'cover' | 'contain') => {
    setSelected(objectFitValue);
    const newStyle = { [styleKey]: objectFitValue };
    const payload = {
      attributeToUpdate: attributeName,
      blockId: blockItemId,
      style: newStyle,
    };
    dispatch(updateAttributeStyle(payload));
  };

  return {
    select,
    selected,
    label,
    buttonContain,
    buttonCover,
  };
};
