import {
  Box,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
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
import { Icon } from '../../../../_shared/components';

type Props = {
  numberValue: number;
  onChangeValue: (id: string, value: string) => void;
  onChangeLabel: (id: string, label: string) => void;
  deleteItem: (id: string) => void;
  idItem: string;
  label: string | undefined;
};

export const NumberInputSlider: React.FC<Props> = ({
  numberValue,
  onChangeValue,
  onChangeLabel,
  deleteItem,
  idItem,
  label,
}) => {
  const handlerOnChangeNumberInput = (value: string) => {
    onChangeValue(idItem, value);
  };

  const handlerOnChangeSlider = (value: number) => {
    onChangeValue(idItem, value.toString());
  };

  const handlerOnChangeLabel = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeLabel(idItem, e.target.value);
  };

  const handlerDeleteItem = () => {
    deleteItem(idItem);
  };

  const propButtonIcon = {
    p: '0',
    minW: '20px',
    height: '25px',
    'aria-label': 'deleteItem',
    variant: 'ghost',
    onClick: handlerDeleteItem,
  };

  return (
    <Box>
      <HStack>
        <Editable w="50%" defaultValue={label}>
          <EditablePreview />
          <EditableInput
            data-testid="labelInput"
            pl="1"
            onChange={handlerOnChangeLabel}
            value={label}
          />
        </Editable>
        <Flex w="100%" justifyContent="flex-end">
          <IconButton
            {...propButtonIcon}
            icon={
              <Icon
                name="Delete"
                color="black.50"
                data-testid="deleteButton"
                transition="all .3s ease"
                _hover={{ color: 'black.0' }}
              />
            }
          />
        </Flex>
      </HStack>
      <HStack mt="2">
        <NumberInput
          onChange={handlerOnChangeNumberInput}
          value={numberValue}
          max={100}
          step={5}
        >
          <NumberInputField data-testid="numberInput" />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Slider
          step={5}
          aria-label="slider"
          onChange={handlerOnChangeSlider}
          value={numberValue}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </HStack>
    </Box>
  );
};
