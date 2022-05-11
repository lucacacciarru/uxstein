import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce';
import { TranslationKey } from '../../_shared/types/i18n';
import { updateAttributeValue } from '../store/actions/update';
import { getAttributeByNameAndId } from '../store/selectors/getAttributeByNameAndId';
import { AttributeName } from '../store/types';
import { UpdateAttributeValuePayload } from '../store/types/update';

export const useAttributeField = (
  blockId: string,
  attributeName: AttributeName,
) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const attribute = useSelector(
    getAttributeByNameAndId(attributeName, blockId),
  );

  const labelTranslationKey: TranslationKey =
    attribute?.label || 'builder.toolBar.attributes.default.label';
  const label = t(labelTranslationKey) as string;

  const placeholderTranslationKey: TranslationKey =
    attribute?.placeholder || 'builder.toolBar.attributes.default.placeholder';
  const placeholder = t(placeholderTranslationKey) as string;

  const attributeStyleFieldsProps = {
    name: attributeName,
    blockItemId: blockId,
    style: attribute?.style,
    styleKeys: Object.keys(attribute?.style || {}),
  };

  const updateValueItems = (items: UpdateAttributeValuePayload['items']) => {
    dispatch(
      updateAttributeValue({
        attributeToUpdate: attributeName,
        blockId,
        items: items || [],
      }),
    );
  };

  const debouncedUpdateValue = useDebouncedCallback(
    (items: UpdateAttributeValuePayload['items']) => {
      updateValueItems(items);
    },
    500,
  );

  return {
    label,
    placeholder,
    attributeStyleFieldsProps,
    attribute,
    debouncedUpdateValue,
    updateValueItems,
  };
};
