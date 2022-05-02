import { Box, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { AttributesModel } from '../../store/types';

type Props = {
  attributes: AttributesModel;
};
export const TextGridItem: FC<Props> = ({ attributes }) => {
  return (
    <Box p="4">
      <Text style={attributes.title?.style}>
        {attributes.title?.items[0].value}
      </Text>
      <Text style={attributes.subtitle?.style}>
        {attributes.subtitle?.items[0].value}
      </Text>
      <Text style={attributes.body?.style} mt="4">
        {attributes.body?.items[0].value}
      </Text>
    </Box>
  );
};
