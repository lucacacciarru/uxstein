import { Box, FormLabel, Stack } from '@chakra-ui/react';
import { useMemo } from 'react';
import { LabelItemField } from '../LabelItemField';
import { useMultipleAttributeField } from '../../../hooks/useMultipleAttributeField';
import { AttributeName } from '../../../store/types';
import { NumberInputSlider } from './NumberInputSlider';

type Props = {
  blockItemId: string;
  name: AttributeName;
};

export const ProgressFieldAttribute: React.FC<Props> = prop => {
  const { attributeItems, placeholder, addItem, ...rest } =
    useMultipleAttributeField(prop.blockItemId, prop.name);

  const renderAllProgressField = useMemo(
    () =>
      attributeItems?.map(item => (
        <NumberInputSlider
          {...rest}
          key={item.id}
          numberValue={parseInt(item.value)}
          idItem={item.id}
          label={item.label}
        />
      )),
    [attributeItems, rest],
  );

  return (
    <Box>
      <FormLabel>{rest.label}</FormLabel>
      <LabelItemField addItem={addItem} placeholder={placeholder} />
      <Stack gap="1rem" mt="2rem">
        {renderAllProgressField}
      </Stack>
    </Box>
  );
};
