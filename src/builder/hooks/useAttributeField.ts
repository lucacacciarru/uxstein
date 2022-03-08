import { useTranslation } from 'react-i18next';
import { TranslationKey } from '../../_shared/types/i18n';
import { MultipleItemAttribute, SingleItemAttribute } from '../store/types';

export const useAttributeField = (attribute?: SingleItemAttribute | MultipleItemAttribute) => {
    const { t } = useTranslation();

    const labelTranslationKey: TranslationKey = attribute?.label || 'builder.toolBar.attributes.default.label';
    const label = t(labelTranslationKey);

    const placeholderTranslationKey: TranslationKey = attribute?.placeholder || 'builder.toolBar.attributes.default.placeholder';
    const placeholder = t(placeholderTranslationKey) as string;

    return {
        label,
        placeholder
    }
}