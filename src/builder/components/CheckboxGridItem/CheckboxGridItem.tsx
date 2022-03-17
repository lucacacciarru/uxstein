import { Box, Checkbox, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { AttributesModel } from '../../store/types';
import { Handles } from '../Handles/Handles';
import { useCheckboxGridItem } from './useCheckboxGridItem';

type Props = {
  style: Record<string, string>;
  attributes: AttributesModel;
  id: string;
};

export const CheckboxGridItem: FC<Props> = ({ id, attributes, style }) => {
  const checkboxStyleProps = useCheckboxGridItem(attributes);

  return (
    <Box
      p="4"
      style={{
        width: '100%',
        height: '100%',
        ...style,
      }}
    >
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
      <Handles id={id} bg={style.backgroundColor} />
    </Box>
  );
};
