import React, { useState } from 'react';
import { AttributeName } from '../store/types';
import { useAttributeField } from './useAttributeField';
import { useValidationTextField } from './useValidationTextField';

export const useSingleAttributeField = (
  blockId: string,
  attributeName: AttributeName,
) => {
  const {
    label,
    placeholder,
    attributeStyleFieldsProps,
    attribute,
    debouncedUpdateValue,
  } = useAttributeField(blockId, attributeName);
  const [value, setValue] = useState(attribute?.items[0]?.value);
  const { errorInput, errorMessage, checkIfTextIsTooLong, maxLength } =
    useValidationTextField(attributeName);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (!checkIfTextIsTooLong(e.target.value)) {
      const newValue = e.target.value;
      setValue(newValue);
      debouncedUpdateValue([
        { id: attribute?.items[0].id || '1', value: newValue },
      ]);
    }
  };

  return {
    label,
    placeholder,
    value,
    onChange,
    attributeStyleFieldsProps,
    errorInput,
    errorMessage,
    maxLength,
  };
};
