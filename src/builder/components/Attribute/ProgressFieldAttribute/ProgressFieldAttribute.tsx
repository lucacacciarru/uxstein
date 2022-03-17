import { Box, Divider, FormLabel, Stack } from '@chakra-ui/react';
import { useMemo } from 'react';
import { LabelItemField } from '../LabelItemField';
import { useMultipleAttributeField } from '../../../hooks/useMultipleAttributeField';
import { useAttributeFieldByIdAndName } from '../../../hooks/useAttributeFieldByIdAndName';
import { AttributeName } from '../../../store/types';
import { NumberInputSlider } from './NumberInputSlider';
import { AttributeStyleFields } from '../AttributeStyleFields';

type Props = {
  blockItemId: string;
  name: AttributeName;
};

export const ProgressFieldAttribute: React.FC<Props> = ({
  blockItemId,
  name,
}) => {
  const { attributeItems, placeholder, addItem, ...rest } =
    useMultipleAttributeField(blockItemId, name);

  const { attributeStyleFieldsProp } = useAttributeFieldByIdAndName(
    blockItemId,
    name,
  );

  const renderAllProgressField = useMemo(
    () =>
      attributeItems?.map(item => (
        <Box key={item.id}>
          <NumberInputSlider
            {...rest}
            numberValue={parseInt(item.value)}
            idItem={item.id}
            label={item.label}
          />
          <Divider />
        </Box>
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
      <Stack gap="2" mt="8">
        {renderAllProgressField}
      </Stack>
      <AttributeStyleFields {...attributeStyleFieldsProp} />
    </Box>
  );
};
