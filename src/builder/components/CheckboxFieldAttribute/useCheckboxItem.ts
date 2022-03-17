import { IconButtonProps } from '@chakra-ui/react';

type Params = {
    id: string;
    value: string;
    onChangeLabel: (id: string, label: string) => void;
    onChangeValue: (id: string, value: string) => void;
    deleteItem: (id: string) => void;
};

export const useCheckboxItem = ({ value, id, onChangeLabel, onChangeValue, deleteItem }: Params) => {

    const handlerOnChangeLabel = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeLabel(id, e.target.value);
    };
    const handlerOnChangeValue = () => {
        const newValue = !value ? 'checked' : '';
        onChangeValue(id, newValue);
    };

    const iconButtonProps: IconButtonProps = {
        'aria-label': "Delete",
        variant: "ghost",
        color: "black.50",
        _hover: { color: 'black.0' },
        size: "icon-xs",
        pos: "absolute",
        right: "10",
        onClick: () => deleteItem(id),
    }

    return {
        isChecked: !!value,
        handlerOnChangeLabel,
        handlerOnChangeValue,
        iconButtonProps,
    }
}