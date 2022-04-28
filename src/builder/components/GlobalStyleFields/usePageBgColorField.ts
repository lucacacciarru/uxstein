import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce';
import { fieldLabelsMap } from '../../config/translationsMaps/fieldLabels';
import { updateGlobalStyle } from '../../store/actions/update';
import { getGlobalStyle } from '../../store/selectors/getGlobalStyle';
import { UpdateGlobalStylePayload } from '../../store/types/update';

export const usePageBgcColorField = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const label = t(fieldLabelsMap.backgroundColor) as string;

  const globalStyle = useSelector(getGlobalStyle);
  const backgroundColor = globalStyle.backgroundColor;

  const debouncedUpdateValue = useDebouncedCallback(
    (value: UpdateGlobalStylePayload) => {
      dispatch(updateGlobalStyle(value));
    },
    500,
  );

  const setColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const payload = { backgroundColor: e.target.value };
    debouncedUpdateValue(payload);
  };

  return {
    setColor,
    backgroundColor,
    label,
  };
};
