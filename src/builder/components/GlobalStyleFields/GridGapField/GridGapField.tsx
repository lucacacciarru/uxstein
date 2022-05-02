import { FC } from 'react';
import { SelectOneSize } from '../../StyleFields/SelectOneSize';
import { useGridGapField } from './useGridGapField';

type Props = {
  styleKey: 'rowGap' | 'columnGap';
};

export const GridGapField: FC<Props> = ({ styleKey }) => {
  const { select, selected, sizes, label } = useGridGapField(styleKey);

  return (
    <SelectOneSize
      label={label}
      selected={selected}
      sizes={sizes}
      select={select}
    />
  );
};
