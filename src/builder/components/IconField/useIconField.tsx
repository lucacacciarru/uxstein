import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce';
import { IconComponentModel } from '../../../_shared/components';
import { colorFieldsLabels } from '../../config/styleSettings/colorFieldsLabels';
import { icon } from '../../config/styleSettings/icon';
import { updateAttributeStyle } from '../../store/actions/updateAttributeStyle';
import { getAttributeByNameAndId } from '../../store/selectors/getAttributeByNameAndId';
import { AttributeName } from '../../store/types';
import { getIconByValueAndIconSettings } from '../../utils/getIconByValueAndIconSettings';

type Params = {
  attributeName: AttributeName;
  styleKey: string;
  blockItemId: string;
};

export const useIconField = ({
  blockItemId,
  styleKey,
  attributeName,
}: Params) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const label = t(colorFieldsLabels[styleKey]) as string;

  const iconSettings = icon[attributeName];
  const selectedValue =
    useSelector(getAttributeByNameAndId(attributeName, blockItemId))?.style
      .icon || '';

  const selectedIcon = useMemo(
    () => getIconByValueAndIconSettings(selectedValue, iconSettings),
    [iconSettings, selectedValue],
  );

  const [selected, setSelected] = useState<keyof IconComponentModel>(
    iconSettings.selected || 'Add',
  );

  const debouncedUpdateValue = useDebouncedCallback(value => {
    dispatch(updateAttributeStyle(value));
  }, 500);

  const select = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value as keyof IconComponentModel);
    const newStyle = {
      [styleKey]: iconSettings.icons
        ? iconSettings.icons[e.target.value]
        : 'Add',
    };
    const payload = {
      attributeToUpdate: attributeName,
      blockId: blockItemId,
      style: newStyle,
    };
    debouncedUpdateValue(payload);
  };

  useEffect(() => {
    setSelected(selectedIcon as keyof IconComponentModel);
  }, [selectedIcon]);

  return {
    label,
    selected,
    select,
    icons: iconSettings.icons,
  };
};
