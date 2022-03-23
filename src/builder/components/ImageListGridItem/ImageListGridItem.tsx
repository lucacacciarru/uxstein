import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { AttributesModel } from '../../store/types';
import { Handles } from '../Handles/Handles';

type Props = {
  style: Record<string, string>;
  attributes: AttributesModel;
  id: string;
};

export const ImageListGridItem: FC<Props> = ({ style, id, attributes }) => {
  return (
    <Box
      style={{
        width: '100%',
        height: '100%',
        ...style,
      }}
      p="4"
    >
      <Text {...attributes.title?.style} mb="4">
        {attributes.title?.items[0].value}
      </Text>
      <SimpleGrid minChildWidth={'10vw'} spacing="8">
        {attributes['image-list']?.items.map(item => (
          <Image
            key={item.id}
            src={item.value}
            fallbackSrc="logo192.png"
            objectFit="cover"
            h="36"
          />
        ))}
      </SimpleGrid>
      <Handles id={id} bg={style.backgroundColor} />
    </Box>
  );
};
