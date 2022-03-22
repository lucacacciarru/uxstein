import { AttributeName } from '../../store/types';
import { SelectIconType } from '../StyleFields/SelectIconType';
import { useIconField } from './useIconField';

type Props = {
  attributeName: AttributeName;
  styleKey: string;
  blockItemId: string;
};

export const IconField: React.FC<Props> = props => {
  const { icons, label, select, selected } = useIconField({ ...props });
  return (
    <SelectIconType
      label={label}
      selected={selected}
      onChange={select}
      icons={icons}
    />
  );
};
