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

  const { style, styleKeys } = useAttributeFieldByIdAndName(blockItemId, name);

  const attributeStyleFieldsProp = {
    name,
    blockItemId,
    style,
    styleKeys,
  };

  const renderAllProgressField = useMemo(
    () =>
      attributeItems?.map(item => (
        <>
          <NumberInputSlider
            key={item.id}
            {...rest}
            numberValue={parseInt(item.value)}
            idItem={item.id}
            label={item.label}
          />
          <Divider />
        </>
      )),
    [attributeItems, rest],
  );

  return (
    <Box>
      <FormLabel>{rest.label}</FormLabel>
      <LabelItemField addItem={addItem} placeholder={placeholder} />
      <Stack gap="2" mt="5">
        {renderAllProgressField}
      </Stack>
      <AttributeStyleFields {...attributeStyleFieldsProp} />
    </Box>
  );
};
