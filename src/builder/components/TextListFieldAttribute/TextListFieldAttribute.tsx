import { Box, FormLabel, Stack } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useMultipleAttributeField } from '../../hooks/useMultipleAttributeField';
import { AttributeName } from '../../store/types';
import { AttributeStyleFields } from '../Attribute/AttributeStyleFields';
import { LabelItemField } from '../LabelItemField';
import { SortableList } from '../SortableList';
import { TextListFieldItem } from './TextListFieldItem';

type Props = {
  blockItemId: string;
  name: AttributeName;
};

export const TextListFieldAttribute: React.FC<Props> = ({
  blockItemId,
  name,
}) => {
  const {
    addItem,
    label,
    placeholder,
    attributeItems,
    attributeStyleFieldsProps,
    updateValueItems,
    setAttributeItems,
    ...rest
  } = useMultipleAttributeField(blockItemId, name);

  const renderAttributeItems = useMemo(
    () =>
      attributeItems.map(item => (
        <TextListFieldItem key={item.id} {...rest} {...item} />
      )),
    [attributeItems, rest],
  );

  return (
    <Box>
      <FormLabel>{label}</FormLabel>
      <LabelItemField
        addCallback={addItem}
        placeholder={placeholder}
        initValue=""
      />
      <Stack gap="2" mt="8">
        <SortableList
          updateValue={updateValueItems}
          elementList={renderAttributeItems}
          setItemsList={setAttributeItems}
        />
      </Stack>
      <AttributeStyleFields {...attributeStyleFieldsProps} />
    </Box>
  );
};
