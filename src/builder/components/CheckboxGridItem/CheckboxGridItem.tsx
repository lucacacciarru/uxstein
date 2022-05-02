import { Box, Checkbox, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { AttributesModel } from '../../store/types';
import { useCheckboxGridItem } from './useCheckboxGridItem';

type Props = {
  attributes: AttributesModel;
};

export const CheckboxGridItem: FC<Props> = ({ attributes }) => {
  const checkboxStyleProps = useCheckboxGridItem(attributes);

  return (
    <Box p="4">
      <Text size="" style={attributes.title?.style}>
        {attributes.title?.items[0].value}
      </Text>
      <Stack>
        {attributes.checkbox?.items.map(item => (
          <Checkbox
            key={item.id}
            isChecked={!!item.value}
            style={{ color: attributes.checkbox?.style.color }}
            {...checkboxStyleProps}
          >
            {item.label}
          </Checkbox>
        ))}
      </Stack>
    </Box>
  );
};
