import { useDeleteItemButton } from '../../hooks/useDeleteItemButton';

type Params = {
  id: string;
  value: string;
  onChangeLabel: (id: string, label: string) => void;
  onChangeValue: (id: string, value: string) => void;
  deleteItem: (id: string) => void;
};

export const useCheckboxItem = ({
  value,
  id,
  onChangeLabel,
  onChangeValue,
  deleteItem,
}: Params) => {
  const { iconButtonProps } = useDeleteItemButton({ id, deleteItem });

  const handlerOnChangeLabel = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeLabel(id, e.target.value);
  };
  const handlerOnChangeValue = () => {
    const newValue = !value ? 'checked' : '';
    onChangeValue(id, newValue);
  };

  return {
    isChecked: !!value,
    handlerOnChangeLabel,
    handlerOnChangeValue,
    iconButtonProps,
  };
};
