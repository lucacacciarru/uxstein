import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { AttributesModel } from '../../store/types';
import { Handles } from '../Handles/Handles';
import { ImageFallback } from '../ImageFallback/ImageFallback';

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
      display="flex"
      flexDir="column"
    >
      <Text {...attributes.title?.style} p="4" flexGrow="0">
        {attributes.title?.items[0].value}
      </Text>
      <SimpleGrid
        minChildWidth={'10vw'}
        spacing="8"
        gridTemplateRows="auto"
        overflow="hidden"
        flexGrow="1"
      >
        {attributes['image-list']?.items.map(item => (
          <Image
            key={item.id}
            src={item.value}
            fallbackSrc="logo192.png"
            fallback={<ImageFallback />}
            objectFit="cover"
          />
        ))}
      </SimpleGrid>
      <Handles id={id} bg={style.backgroundColor} />
    </Box>
  );
};
