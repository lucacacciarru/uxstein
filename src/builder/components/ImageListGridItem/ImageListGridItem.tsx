import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { AttributesModel } from '../../store/types';
import { ImageFallback } from '../ImageFallback/ImageFallback';

type Props = {
  attributes: AttributesModel;
};

export const ImageListGridItem: FC<Props> = ({ attributes }) => {
  return (
    <Box display="flex" flexDir="column">
      <Text {...attributes.title?.style} p="4" flexGrow="0">
        {attributes.title?.items[0].value}
      </Text>
      <SimpleGrid
        minChildWidth="10vw"
        spacing="8"
        gridTemplateRows="auto"
        overflow="hidden"
        flexGrow="1"
      >
        {attributes['image-list']?.items.map(item => (
          <Image
            key={item.id}
            src={item.value}
            fallback={<ImageFallback />}
            objectFit="cover"
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};
