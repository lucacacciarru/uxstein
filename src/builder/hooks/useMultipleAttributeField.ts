import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce';
import { TranslationKey } from '../../_shared/types/i18n';
import { updateAttributeValue } from '../store/actions/updateAttributeValue';
import { getAttributeByNameAndId } from '../store/selectors/getAttributeByNameAndId';
import { AttributeName, ItemAttribute } from '../store/types';

export function useMultipleAttributeField(
  blockId: string,
  attributeName: AttributeName,
) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const attribute = useSelector(
    getAttributeByNameAndId(attributeName, blockId),
  );

  const labelTranslationKey: TranslationKey =
    attribute?.label || 'builder.toolBar.attributes.items.label';
  const label = t(labelTranslationKey);

  const placeholderTranslationKey: TranslationKey =
    attribute?.placeholder || 'builder.toolBar.attributes.items.placeholder';
  const placeholder = t(placeholderTranslationKey) as string;

  const [attributeItems, setAttributeItems] = useState<
    ItemAttribute['items'] | undefined
  >(attribute?.items);

  const debouncedUpdateValue = useDebouncedCallback(items => {
    dispatch(
      updateAttributeValue({
        attributeToUpdate: attributeName,
        blockId,
        items,
      }),
    );
  }, 200);

  const onChangeValue = (id: string, value: string) => {
    const itemsList = attributeItems?.map(item => {
      if (item.id === id) {
        return { ...item, value };
      }
      return item;
    });
    setAttributeItems(itemsList);
    debouncedUpdateValue(itemsList);
  };

  const onChangeLabel = (id: string, label: string) => {
    const itemsList = attributeItems?.map(item => {
      if (item.id === id) {
        return { ...item, label };
      }
      return item;
    });
    setAttributeItems(itemsList);
    debouncedUpdateValue(itemsList);
  };

  const addItem = (label: string, value: string) => {
    const item = {
      id: Date.now().toString(),
      label,
      value,
    };
    const uploadedItemsList = [...(attributeItems || []), item];
    setAttributeItems(uploadedItemsList);
    debouncedUpdateValue(uploadedItemsList);
  };

  const deleteItem = (id: string) => {
    const filteredItems = attributeItems?.filter(item => item.id !== id);
    setAttributeItems(filteredItems);
    debouncedUpdateValue(filteredItems);
  };

  return {
    label,
    placeholder,
    attributeItems: attributeItems || [],
    onChangeValue,
    onChangeLabel,
    addItem,
    deleteItem,
  };
}
