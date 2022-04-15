import { Box, BoxProps } from '@chakra-ui/react';

export const SectionWrapper: React.FC<BoxProps> = ({ children, ...rest }) => {
  return (
    <Box
      as="section"
      py="8"
      mt={{ base: '10', md: '20' }}
      px={{ base: '2', sm: '2.5', md: '6', lg: '14' }}
      {...rest}
    >
      {children}
    </Box>
  );
};
