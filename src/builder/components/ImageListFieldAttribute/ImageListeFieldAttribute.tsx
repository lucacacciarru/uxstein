import { Box, FormLabel } from '@chakra-ui/react';
import { FC } from 'react';
import { useMultipleAttributeField } from '../../hooks/useMultipleAttributeField';
import { AttributeName } from '../../store/types';
import { AttributeStyleFields } from '../Attribute/AttributeStyleFields';
import { ClickableBoxWithDelete } from '../ClickableBoxWithDelete/ClickableBoxWithDelete';
import { AddItemBox } from './AddItemBox';
import { InputModal } from './InputModal';

type Props = {
  blockItemId: string;
  name: AttributeName;
};

export const ImageListFieldAttribute: FC<Props> = ({ name, blockItemId }) => {
  const {
    attributeItems,
    placeholder,
    addItem,
    attributeStyleFieldsProp,
    label,
    onChangeValue,
    deleteItem,
  } = useMultipleAttributeField(blockItemId, name);

  return (
    <Box>
      <FormLabel>{label}</FormLabel>
      {attributeItems.map(attribute => (
        <InputModal
          value={attribute.value}
          id={attribute.id}
          onChangeValue={onChangeValue}
          deleteItem={deleteItem}
          key={attribute.id}
          placeholder={placeholder}
        />
      ))}
      <ClickableBoxWithDelete clickCallback={() => addItem('', '')}>
        <AddItemBox />
      </ClickableBoxWithDelete>
      <AttributeStyleFields {...attributeStyleFieldsProp} />
    </Box>
  );
};
