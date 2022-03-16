import { Box, FormLabel, Stack } from '@chakra-ui/react';
import { FC, useMemo } from 'react';
import { AttributeName } from '../../store/types';
import { LabelItemField } from '../Attribute/LabelItemField';
import { useMultipleAttributeField } from '../../hooks/useMultipleAttributeField';
import { CheckboxFieldItem } from './CheckboxFieldItem';
type Props = {
  blockItemId: string;
  name: AttributeName;
};

export const CheckboxFieldAttribute: FC<Props> = ({ blockItemId, name }) => {
  const { addItem, label, placeholder, attributeItems, ...restCallbacks } =
    useMultipleAttributeField(blockItemId, name);

  const renderAttributeItems = useMemo(() => {
    return attributeItems.map(item => (
      <CheckboxFieldItem key={item.id} {...item} {...restCallbacks} />
    ));
  }, [attributeItems, restCallbacks]);

  return (
    <Box>
      <FormLabel>{label}</FormLabel>
      <LabelItemField
        addItem={addItem}
        placeholder={placeholder}
        initValue=""
      />
      <Stack gap="1rem" mt="2rem">
        {renderAttributeItems}
      </Stack>
    </Box>
  );
};
