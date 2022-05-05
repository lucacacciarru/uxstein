import { Box, FormLabel, Stack } from '@chakra-ui/react';
import { useMemo } from 'react';
import { LabelItemField } from '../Attribute/LabelItemField';
import { useMultipleAttributeField } from '../../hooks/useMultipleAttributeField';
import { AttributeName } from '../../store/types';
import { ProgressFieldItem } from './ProgressFieldItem';
import { AttributeStyleFields } from '../Attribute/AttributeStyleFields';
import { SortableList } from '../SortableList';

type Props = {
  blockItemId: string;
  name: AttributeName;
};

export const ProgressFieldAttribute: React.FC<Props> = ({
  blockItemId,
  name,
}) => {
  const {
    attributeItems,
    placeholder,
    addItem,
    attributeStyleFieldsProps,
    updateValueItems,
    setAttributeItems,
    ...rest
  } = useMultipleAttributeField(blockItemId, name);

  const renderProgressField = useMemo(
    () =>
      attributeItems?.map(item => (
        <ProgressFieldItem
          {...rest}
          key={item.id}
          value={parseInt(item.value)}
          id={item.id}
          label={item.label}
        />
      )),
    [attributeItems, rest],
  );

  return (
    <Box>
      <FormLabel>{rest.label}</FormLabel>
      <LabelItemField
        addCallback={addItem}
        placeholder={placeholder}
        initValue="30"
      />
      <Stack gap="2" mt="2">
        <SortableList
          updateValue={updateValueItems}
          elementList={renderProgressField}
          setItemsList={setAttributeItems}
        />
      </Stack>
      <AttributeStyleFields {...attributeStyleFieldsProps} />
    </Box>
  );
};
