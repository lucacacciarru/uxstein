import { Box, Image } from '@chakra-ui/react';
import { Adorments } from '../Adorments';
import { adormentList } from '../Adorments/adormentList';
import { imgLibrary } from '../../assets/imgLibrary';

export const HeroImages: React.FC = () => {
  return (
    <>
      <Box position={'relative'} width={'100%'} h="65vh">
        <Adorments items={adormentList} />
        <Image
          objectFit={'contain'}
          w="100%"
          h="100%"
          src={imgLibrary.template}
        />
      </Box>
    </>
  );
};
