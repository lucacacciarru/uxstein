import { Box, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { useMemo } from 'react';
import { AttributesModel } from '../../store/types';

type Props = {
  attributes: AttributesModel;
};

export const TextListGridItem: React.FC<Props> = ({ attributes }) => {
  const renderTextList = useMemo(
    () =>
      attributes['text-list']?.items.map(item => (
        <ListItem key={item.id} mb="1" style={attributes['text-list']?.style}>
          {item.label}
        </ListItem>
      )),
    [attributes],
  );
  return (
    <Box p="4">
      <Text style={attributes.title?.style}>
        {attributes.title?.items[0].value}
      </Text>
      <UnorderedList gap={'2'}>{renderTextList}</UnorderedList>
    </Box>
  );
};
