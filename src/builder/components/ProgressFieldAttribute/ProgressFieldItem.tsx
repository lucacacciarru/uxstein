import {
  Box,
  Editable,
  EditableInput,
  EditablePreview,
  HStack,
  IconButton,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from '@chakra-ui/react';
import { Icon } from '../../../_shared/components';
import { useProgressFieldItem } from './useProgressFieldItem';

type Props = {
  value: number;
  onChangeValue: (id: string, value: string) => void;
  onChangeLabel: (id: string, label: string) => void;
  deleteItem: (id: string) => void;
  id: string;
  label: string | undefined;
};

export const ProgressFieldItem: React.FC<Props> = ({ label, ...rest }) => {
  const {
    OnChangeLabel,
    numberInputProps,
    sliderProps,
    iconProps,
    iconButtonProps,
  } = useProgressFieldItem(rest);

  return (
    <Box>
      <HStack>
        <Editable defaultValue={label}>
          <EditablePreview />
          <EditableInput onChange={OnChangeLabel} data-testid="labelInput" />
        </Editable>
        <IconButton
          icon={<Icon {...iconProps} data-testid="deleteButton" />}
          {...iconButtonProps}
        />
      </HStack>
      <HStack mt="2" w="90%">
        <NumberInput {...numberInputProps}>
          <NumberInputField data-testid="numberInput" />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Slider aria-label="slider" {...sliderProps}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </HStack>
    </Box>
  );
};
