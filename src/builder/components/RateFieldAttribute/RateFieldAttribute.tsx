import { AttributeName } from '../../store/types';
import { useMultipleAttributeField } from '../../hooks/useMultipleAttributeField';
import { Box, FormLabel, Stack } from '@chakra-ui/react';
import { LabelItemField } from '../LabelItemField';
import { AttributeStyleFields } from '../Attribute/AttributeStyleFields';
import { useMemo } from 'react';
import { RateFieldItem } from './RateFieldItem';
import { SortableList } from '../SortableList';

type Props = {
  blockItemId: string;
  name: AttributeName;
};

export const RateFieldAttribute: React.FC<Props> = ({ blockItemId, name }) => {
  const {
    addItem,
    label,
    placeholder,
    attributeItems,
    attributeStyleFieldsProps,
    setAttributeItems,
    updateValueItems,
    ...rest
  } = useMultipleAttributeField(blockItemId, name);

  const renderAttributeItems = useMemo(
    () =>
      attributeItems.map(item => (
        <RateFieldItem key={item.id} {...item} {...rest} />
      )),
    [attributeItems, rest],
  );

  return (
    <Box>
      <FormLabel>{label}</FormLabel>
      <LabelItemField
        addCallback={addItem}
        placeholder={placeholder}
        initValue="3"
      />
      <Stack gap="2" mt="2">
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
