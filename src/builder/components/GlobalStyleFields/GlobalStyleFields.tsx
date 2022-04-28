import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce';
import { updateGlobalStyle } from '../../store/actions/update';
import { getGlobalStyle } from '../../store/selectors/getGlobalStyle';
import { UpdateGlobalStylePayload } from '../../store/types/update';
import { ColorField } from '../StyleFields/ColorField';

export const GlobalStyleFields: FC = () => {
  const dispatch = useDispatch();
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

  return (
    <ColorField
      label="Page background"
      onChange={setColor}
      value={backgroundColor}
    />
  );
};
