import { FormLabel, Select } from '@chakra-ui/react';
import { useMemo } from 'react';
import { IconList } from '../../config/styleSettings/icon';

export type IconsModel = Record<string, string>;

type Props = {
  icons: IconList | undefined;
  selected: keyof IconsModel;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  label: string;
};

export const SelectIconType: React.FC<Props> = ({
  icons,
  label,
  onChange,
  selected,
}) => {
  const renderOptionSelect = useMemo(
    () =>
      Object.keys(icons || {}).map(icon => (
        <option style={{ textTransform: 'capitalize' }} key={icon} value={icon}>
          {icon}
        </option>
      )),
    [icons],
  );
  return (
    <>
      <FormLabel>{label}</FormLabel>
      <Select
        data-testid="select"
        mt="0"
        textTransform={'capitalize'}
        value={selected}
        onChange={onChange}
      >
        {renderOptionSelect}
      </Select>
    </>
  );
};
