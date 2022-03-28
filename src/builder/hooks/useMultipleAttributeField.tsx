import { Alert, AlertIcon, AlertTitle, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AttributeName, ItemAttribute } from '../store/types';
import { useAttributeField } from './useAttributeField';
import { checkIfListHasMoreThanOneItem } from '../utils/checkIfListHasMoreThanOneItem';

export function useMultipleAttributeField(
  blockId: string,
  attributeName: AttributeName,
) {
  const {
    label,
    placeholder,
    attribute,
    attributeStyleFieldsProps,
    debouncedUpdateValue,
  } = useAttributeField(blockId, attributeName);

  const { t } = useTranslation();
  const toast = useToast();

  const [attributeItems, setAttributeItems] = useState<
    ItemAttribute['items'] | undefined
  >(attribute?.items);

  const onChangeValue = (id: string, value: string) => {
    const itemsList = attributeItems?.map(item => {
      if (item.id === id) {
        return { ...item, value };
      }
      return item;
    });
    setAttributeItems(itemsList);
    debouncedUpdateValue(itemsList || []);
  };

  const onChangeLabel = (id: string, label: string) => {
    const itemsList = attributeItems?.map(item => {
      if (item.id === id) {
        return { ...item, label };
      }
      return item;
    });
    setAttributeItems(itemsList);
    debouncedUpdateValue(itemsList || []);
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
    if (checkIfListHasMoreThanOneItem(attribute?.items)) {
      const filteredItems = attributeItems?.filter(item => item.id !== id);
      setAttributeItems(filteredItems);
      debouncedUpdateValue(filteredItems || []);
      return;
    }
    toast({
      isClosable: true,
      render: () => (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle mr={2}>
            {t('builder.toolBar.errors.impossibleToDeleteItem')}
          </AlertTitle>
        </Alert>
      ),
    });
  };

  return {
    label,
    placeholder,
    attributeItems: attributeItems || [],
    onChangeValue,
    onChangeLabel,
    addItem,
    deleteItem,
    attributeStyleFieldsProps,
  };
}
