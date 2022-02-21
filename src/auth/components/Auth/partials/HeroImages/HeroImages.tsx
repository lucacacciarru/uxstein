import { Box, Image } from '@chakra-ui/react';
import { Adorments } from '../Adorments';
import { imgLibrary } from '../imgLibrary';

export const HeroImages: React.FC = () => {
  return (
    <>
      <Box position={'relative'} width={'100%'} h="65vh">
        <Adorments />
        <Image
          objectFit={'contain'}
          w={'100%'}
          h="100%"
          src={imgLibrary.template}
        />
      </Box>
    </>
  );
};
