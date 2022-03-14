import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce';
import { blockSizeSettings } from '../../config/styleSettings/block';
import { colorFieldsLabels } from '../../config/styleSettings/colorFieldsLabels';
import { updateBlockStyle } from '../../store/actions/updateBlockStyle';
import { SizesModel } from '../StyleFields/SelectOneSize';

type Params = {
    styleKey: string;
    blockItemId: string;
};

export const useBorderField = ({ styleKey, blockItemId }: Params) => {

    const dispatch = useDispatch();
    const { t } = useTranslation();
    const label = t(colorFieldsLabels[styleKey]) as string;

    const sizeSettings = blockSizeSettings[styleKey];

    const [selected, setSelected] = useState<keyof SizesModel>(
        sizeSettings.selected,
    );

    const debouncedUpdateValue = useDebouncedCallback(value => {
        dispatch(updateBlockStyle(value));
    }, 500);

    const select = (size: keyof SizesModel) => {
        setSelected(size);
        const newStyle = { [styleKey]: sizeSettings.sizes[size] || '' };
        const payload = {
            blockId: blockItemId,
            style: newStyle,
        };
        debouncedUpdateValue(payload);
    };

    return {
        label,
        selected,
        select,
        sizes: sizeSettings.sizes,
    }

}