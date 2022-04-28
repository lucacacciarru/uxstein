import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce';
import { fieldLabelsMap } from '../../config/translationsMaps/fieldLabels';
import { updateBlockStyle } from '../../store/actions/update';

type Params = {
  styleKey: string;
  styleValue: string;
  blockItemId: string;
};

export const useBlockColorField = ({
  styleValue,
  blockItemId,
  styleKey,
}: Params) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const label = t(fieldLabelsMap[styleKey]) as string;

  const debouncedUpdateValue = useDebouncedCallback(value => {
    dispatch(updateBlockStyle(value));
  }, 500);

  const setColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStyle = { [styleKey]: e.target.value };
    const payload = {
      blockId: blockItemId,
      style: newStyle,
    };
    debouncedUpdateValue(payload);
  };

  return {
    setColor,
    label,
    color: styleValue,
  };
};
