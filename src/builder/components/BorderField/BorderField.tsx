import { FC } from 'react';
import { SelectOneSize } from '../StyleFields/SelectOneSize';
import { useBorderField } from './useBorderField';

type Props = {
  styleKey: string;
  styleValue: string;
  blockItemId: string;
};

export const BorderField: FC<Props> = props => {
  const { label, select, selected, sizes } = useBorderField({ ...props });
  return (
    <SelectOneSize
      label={label}
      select={select}
      selected={selected}
      sizes={sizes}
    />
  );
};
