import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { AttributesModel } from '../../store/types';

export const useTextGridItem = (attributes: AttributesModel) => {
    const { t } = useTranslation();
    const titleValue = useMemo(() => {
        if (!attributes.title?.value && attributes.title?.initialValue) {
            return t(attributes.title?.initialValue);
        }

        return attributes.title?.value;
    }, [attributes.title?.initialValue, attributes.title?.value, t]);

    const subtitleValue = useMemo(() => {
        if (!attributes.subtitle?.value && attributes.subtitle?.initialValue) {
            return t(attributes.subtitle?.initialValue);
        }

        return attributes.subtitle?.value;
    }, [attributes.subtitle?.initialValue, attributes.subtitle?.value, t]);

    return {
        titleValue,
        subtitleValue
    }

}