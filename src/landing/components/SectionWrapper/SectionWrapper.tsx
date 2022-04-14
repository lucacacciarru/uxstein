import { Box, BoxProps } from '@chakra-ui/react';

export const SectionWrapper: React.FC<BoxProps> = ({ children, ...rest }) => {
  return (
    <Box as="section" pt="24" {...rest}>
      {children}
    </Box>
  );
};
