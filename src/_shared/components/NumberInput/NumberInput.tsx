import { Input, useNumberInput, Flex } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

type Props = {
  value: number;
  isDisable?: boolean;
  settings?: {
    max?: number;
    min?: number;
    step?: number;
    invalid?: boolean;
  };
};

export const NumberInput: React.FC<Props> = ({
  value,
  settings,
  isDisable,
}) => {
  const invalid = settings?.invalid || false;

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: settings?.step,
      defaultValue: value,
      max: settings?.max,
      min: settings?.min,
      isDisabled: isDisable,
    });
  const increment = getIncrementButtonProps();
  const decrement = getDecrementButtonProps();
  const input = getInputProps();
  return (
    <Flex gap={'1rem'}>
      <Button size={'sm'} {...increment}>
        +
      </Button>
      <Input isInvalid={invalid} size={'sm'} {...input} />
      <Button size={'sm'} {...decrement}>
        -
      </Button>
    </Flex>
  );
};
