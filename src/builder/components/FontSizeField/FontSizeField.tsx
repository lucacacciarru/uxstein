import { FC } from 'react';
import { AttributeName } from '../../store/types';
import { SelectOneSize } from '../StyleFields/SelectOneSize';
import { useFontSizeField } from './useFontSizeField';

type Props = {
  attributeName: AttributeName;
  styleKey: string;
  blockItemId: string;
};

export const FontSizeField: FC<Props> = props => {
  const { label, select, selected, sizes } = useFontSizeField({ ...props });

  return (
    <SelectOneSize
      sizes={sizes}
      select={select}
      selected={selected}
      label={label}
    />
  );
};
