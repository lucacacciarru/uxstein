//TODO: insert real gif showcase
import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { MediaShowCaseContent } from './MediaShowcaseContent';

type Props = {
  openedIndex: 0 | 1 | 2;
};

export const MediaShowcase: FC<Props> = ({ openedIndex }) => {
  return (
    <Box
      bg="brand.lighter"
      py="8"
      px={{ base: '2', sm: '4', md: '8', lg: '16' }}
      border="dark.s"
      borderRadius="md"
      w="full"
      transform="auto"
      translateY={{ base: '6vh', lg: '0' }}
    >
      <Box position="relative" maxH="lg">
        <MediaShowCaseContent src="" i={0} openedIndex={openedIndex} />
        <MediaShowCaseContent src="" i={1} openedIndex={openedIndex} />
        <MediaShowCaseContent src="" i={2} openedIndex={openedIndex} />
      </Box>
    </Box>
  );
};
