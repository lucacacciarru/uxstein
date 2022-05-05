import { Box, FormLabel } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useMultipleAttributeField } from '../../hooks/useMultipleAttributeField';
import { AttributeName } from '../../store/types';
import { AttributeStyleFields } from '../Attribute/AttributeStyleFields';
import { ClickableBoxWithDelete } from '../ClickableBoxWithDelete/ClickableBoxWithDelete';
import { SortableList } from '../SortableList';
import { AddItemBox } from './AddItemBox';
import { InputModal } from './InputModal';

type Props = {
  blockItemId: string;
  name: AttributeName;
};

export const ImageListFieldAttribute: React.FC<Props> = ({
  name,
  blockItemId,
}) => {
  const {
    attributeItems,
    placeholder,
    addItem,
    attributeStyleFieldsProps,
    label,
    onChangeValue,
    deleteItem,
    updateValueItems,
    setAttributeItems,
  } = useMultipleAttributeField(blockItemId, name);

  const renderAttributeItems = useMemo(
    () =>
      attributeItems.map(attribute => (
        <InputModal
          value={attribute.value}
          id={attribute.id}
          onChangeValue={onChangeValue}
          deleteItem={deleteItem}
          key={attribute.id}
          placeholder={placeholder}
        />
      )),
    [attributeItems, deleteItem, onChangeValue, placeholder],
  );

  return (
    <Box>
      <FormLabel>{label}</FormLabel>
      <SortableList
        updateValue={updateValueItems}
        elementList={renderAttributeItems}
        setItemsList={setAttributeItems}
      />
      <ClickableBoxWithDelete clickCallback={() => addItem('', '')}>
        <AddItemBox />
      </ClickableBoxWithDelete>
      <AttributeStyleFields {...attributeStyleFieldsProps} />
    </Box>
  );
};
