import {
  Box,
  Button,
  ButtonGroup,
  FormLabel,
  IconButton,
} from '@chakra-ui/react';
import { FC } from 'react';
import { Icon } from '../../../_shared/components';

export type SizesModel<T = string> = {
  s: T;
  m: T;
  l: T;
  none?: T;
};

type Props = {
  sizes: SizesModel | SizesModel<number>;
  selected: keyof SizesModel;
  select: Function;
  label: string;
};

export const SelectOneSize: FC<Props> = ({
  sizes,
  selected,
  select,
  label,
}) => {
  return (
    <Box>
      <FormLabel>{label}</FormLabel>
      <ButtonGroup>
        {Object.keys(sizes).map(size => (
          <SelectableSizeIcon
            name={size as keyof SizesModel}
            isSelected={selected === size}
            select={select}
            key={size}
          />
        ))}
      </ButtonGroup>
    </Box>
  );
};

type SelectableSizeIconProps = {
  name: keyof SizesModel;
  isSelected: boolean;
  select: Function;
};

const SelectableSizeIcon: FC<SelectableSizeIconProps> = ({
  name,
  isSelected,
  select,
}) => {
  if (name === 'none') {
    return (
      <IconButton
        aria-label="empty value"
        data-testid="emptyValue-icon"
        size="icon-md"
        variant="toggle"
        icon={<Icon name="RemoveCircle" color="" size="7" />}
        isActive={isSelected}
        onClick={() => select(name)}
      />
    );
  }
  return (
    <Button
      size="icon-md"
      variant="toggle"
      role="size-button"
      isActive={isSelected}
      onClick={() => select(name)}
      textTransform="capitalize"
    >
      {name}
    </Button>
  );
};
