import { NumberInputProps, SliderProps } from '@chakra-ui/react';
import { CustomIconProps } from '../../../_shared/components';
import { useDeleteItemButton } from '../../hooks/useDeleteItemButton';

type Params = {
  onChangeValue: (id: string, value: string) => void;
  onChangeLabel: (id: string, label: string) => void;
  deleteItem: (id: string) => void;
  id: string;
  value: number;
};

export const useProgressFieldItem = ({
  deleteItem,
  id,
  onChangeLabel,
  onChangeValue,
  value,
}: Params) => {
  const { iconButtonProps } = useDeleteItemButton({ id, deleteItem });

  const OnChangeNumberInput = (value: string) => {
    onChangeValue(id, value);
  };

  const OnChangeSlider = (value: number) => {
    onChangeValue(id, value.toString());
  };

  const OnChangeLabel = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeLabel(id, e.target.value);
  };

  const iconProps: CustomIconProps = {
    name: 'Delete',
    color: 'black.50',
    transition: 'all .3s ease',
    _hover: { color: 'black.0' },
  };

  const numberInputProps: NumberInputProps = {
    onChange: OnChangeNumberInput,
    max: 100,
    step: 5,
    value,
  };

  const sliderProps: SliderProps = {
    step: 5,
    onChange: OnChangeSlider,
    value,
  };

  return {
    OnChangeLabel,
    iconButtonProps,
    iconProps,
    numberInputProps,
    sliderProps,
  };
};
