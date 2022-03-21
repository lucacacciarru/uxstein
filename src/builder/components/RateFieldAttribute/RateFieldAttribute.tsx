import { AttributeName } from '../../store/types';
import { useMultipleAttributeField } from '../../hooks/useMultipleAttributeField';
import { useAttributeFieldByIdAndName } from '../../hooks/useAttributeFieldByIdAndName';
import { Box, FormLabel, Stack } from '@chakra-ui/react';
import { LabelItemField } from '../Attribute/LabelItemField';
import { AttributeStyleFields } from '../Attribute/AttributeStyleFields';
import { useMemo } from 'react';
import { RateFieldItem } from './RateFieldItem';

type Props = {
  blockItemId: string;
  name: AttributeName;
};

export const RateFieldAttribute: React.FC<Props> = ({ blockItemId, name }) => {
  const { addItem, label, placeholder, attributeItems, ...rest } =
    useMultipleAttributeField(blockItemId, name);

  const { attributeStyleFieldsProp } = useAttributeFieldByIdAndName(
    blockItemId,
    name,
  );

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
        initValue=""
      />
      <Stack gap="2" mt="8">
        {renderAttributeItems}
      </Stack>
      <AttributeStyleFields {...attributeStyleFieldsProp} />
    </Box>
  );
};
