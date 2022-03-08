import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce';
import { TranslationKey } from '../../_shared/types/i18n';
import { updateAttributeValue } from '../store/actions/updateAttributeValue';
import { getAttributeByNameAndId } from '../store/selectors/getAttributeByNameAndId';
import { AttributeName } from '../store/types';

export const useAttributeFieldByIdAndName = (blockId: string, attributeName: AttributeName) => {

    const attribute = useSelector(getAttributeByNameAndId(actualAttributeName, blockId));

    const dispatch = useDispatch()
    const { t } = useTranslation();

    const labelTranslationKey: TranslationKey = attribute?.label || 'builder.toolBar.attributes.default.label';
    const label = t(labelTranslationKey);

    const placeholderTranslationKey: TranslationKey = attribute?.placeholder || 'builder.toolBar.attributes.default.placeholder';
    const placeholder = t(placeholderTranslationKey) as string;

    const getInitialValueState = () => {
        if (attribute?.value) {
            return attribute?.value;
        }

        if (attribute?.initialValue) {
            return t(attribute?.initialValue) as string;
        }
    }
    const [value, setValue] = useState(getInitialValueState());

    const debouncedUpdateValue = useDebouncedCallback((value) => {
        dispatch(updateAttributeValue({ attributeToUpdate: actualAttributeName, blockId, value }));
    }, 800);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        debouncedUpdateValue(e.target.value);
    };

    return {
        label,
        placeholder,
        value,
        onChange
    }
}