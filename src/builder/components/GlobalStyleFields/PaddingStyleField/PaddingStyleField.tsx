import { FC } from 'react';
import { SelectOneSize } from '../../StyleFields/SelectOneSize';
import { usePaddingStyleField } from './usePaddingStyleField';

type Props = {
  styleKey: 'containerPaddingX' | 'containerPaddingY';
};

export const PaddingStyleField: FC<Props> = ({ styleKey }) => {
  const { label, select, selected, sizes } = usePaddingStyleField(styleKey);
  return (
    <SelectOneSize
      label={label}
      selected={selected}
      sizes={sizes}
      select={select}
    />
  );
};
