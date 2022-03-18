import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce';
import { TranslationKey } from '../../_shared/types/i18n';
import { updateAttributeValue } from '../store/actions/updateAttributeValue';
import { getAttributeByNameAndId } from '../store/selectors/getAttributeByNameAndId';
import { AttributeName } from '../store/types';

export const useAttributeFieldByIdAndName = (
  blockId: string,
  attributeName: AttributeName,
) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const attribute = useSelector(
    getAttributeByNameAndId(attributeName, blockId),
  );
  const [value, setValue] = useState(attribute?.items[0]?.value);

  const attributeValue = useMemo(() => attribute?.items[0]?.value, [attribute]);

  const labelTranslationKey: TranslationKey =
    attribute?.label || 'builder.toolBar.attributes.default.label';
  const label = t(labelTranslationKey);

  const placeholderTranslationKey: TranslationKey =
    attribute?.placeholder || 'builder.toolBar.attributes.default.placeholder';
  const placeholder = t(placeholderTranslationKey) as string;

  const debouncedUpdateValue = useDebouncedCallback(value => {
    dispatch(
      updateAttributeValue({
        attributeToUpdate: attributeName,
        blockId,
        items: [{ id: attribute?.items[0].id || '1', value }],
      }),
    );
  }, 800);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValue(e.target.value);
    debouncedUpdateValue(e.target.value);
  };

  useEffect(() => {
    setValue(attributeValue);
  }, [attributeValue]);

  const attributeStyleFieldsProp = {
    name: attributeName,
    blockItemId: blockId,
    style: attribute?.style,
    styleKeys: Object.keys(attribute?.style || {}),
  };

  return {
    label,
    placeholder,
    value,
    onChange,
    attributeStyleFieldsProp,
  };
};
