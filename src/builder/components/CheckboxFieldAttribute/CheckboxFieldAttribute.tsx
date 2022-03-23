import { Box, FormLabel, Stack } from '@chakra-ui/react';
import { FC, useMemo } from 'react';
import { AttributeName } from '../../store/types';
import { LabelItemField } from '../Attribute/LabelItemField';
import { useMultipleAttributeField } from '../../hooks/useMultipleAttributeField';
import { CheckboxFieldItem } from './CheckboxFieldItem';
import { AttributeStyleFields } from '../Attribute/AttributeStyleFields';
type Props = {
  blockItemId: string;
  name: AttributeName;
};

export const CheckboxFieldAttribute: FC<Props> = ({ blockItemId, name }) => {
  const {
    addItem,
    label,
    placeholder,
    attributeItems,
    attributeStyleFieldsProps,
    ...restCallbacks
  } = useMultipleAttributeField(blockItemId, name);

  const renderAttributeItems = useMemo(() => {
    return attributeItems.map(item => (
      <CheckboxFieldItem key={item.id} {...item} {...restCallbacks} />
    ));
  }, [attributeItems, restCallbacks]);

  return (
    <Box>
      <FormLabel>{label}</FormLabel>
      <LabelItemField
        addCallback={addItem}
        placeholder={placeholder}
        initValue=""
      />
      <Stack gap="2" mt="8">
        {renderAttributeItems}
      </Stack>
      <AttributeStyleFields {...attributeStyleFieldsProps} />
    </Box>
  );
};
