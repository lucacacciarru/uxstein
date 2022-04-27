import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce';
import { fieldLabelsMap } from '../../config/translationsMaps/fieldLabels';
import { updateAttributeStyle } from '../../store/actions/update';
import { AttributeName } from '../../store/types';
type Params = {
  attributeName: AttributeName;
  styleKey: string;
  styleValue: string;
  blockItemId: string;
};
export const useAttributeColorField = ({
  styleValue,
  styleKey,
  attributeName,
  blockItemId,
}: Params) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const label = t(fieldLabelsMap[styleKey]) as string;

  const setNewColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStyle = { [styleKey]: e.target.value };
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
    setNewColor,
    label,
    color: styleValue,
  };
};
