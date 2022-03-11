import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce';
import { colorFieldsLabels } from '../../config/styleSettings/colorFieldsLabels';
import { updateBlockStyle } from '../../store/actions/updateBlockStyle';

type Params = {
    styleKey: string;
    styleValue: string;
    blockItemId: string;
};

export const useBlockColorField = ({ styleValue, blockItemId, styleKey }: Params) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const label = t(colorFieldsLabels[styleKey]) as string;
    const [color, setColor] = useState(styleValue);

    useEffect(() => {
        setColor(styleValue)
    }, [styleValue])

    const setNewColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value);
        const newStyle = { [styleKey]: e.target.value };
        const payload = {
            blockId: blockItemId,
            style: newStyle,
        };
        debouncedUpdateValue(payload);
    };

    const debouncedUpdateValue = useDebouncedCallback(value => {
        dispatch(updateBlockStyle(value));
    }, 500);

    return {
        setNewColor,
        label,
        color,
    };
}