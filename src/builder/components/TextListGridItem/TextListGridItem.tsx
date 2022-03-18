import { Box, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { useMemo } from 'react';
import { AttributesModel } from '../../store/types';
import { Handles } from '../Handles/Handles';

type Props = {
  style: Record<string, string>;
  attributes: AttributesModel;
  id: string;
};

export const TextListGridItem: React.FC<Props> = ({
  attributes,
  id,
  style,
}) => {
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
    <Box
      p="4"
      style={{
        width: '100%',
        height: '100%',
        ...style,
      }}
      data-testid="text-list"
    >
      <Text style={attributes.title?.style}>
        {attributes.title?.items[0].value}
      </Text>
      <UnorderedList gap={'2'}>{renderTextList}</UnorderedList>
      <Handles id={id} bg={style.backgroundColor} />
    </Box>
  );
};
