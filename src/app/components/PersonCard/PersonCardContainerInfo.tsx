import { HStack } from '@chakra-ui/react';

export const PersonCardContainerInfo: React.FC = ({ children }) => {
  return (
    <HStack
      w="100%"
      py="2"
      px="4"
      justifyContent="space-between"
      borderTop="dark.s"
    >
      {children}
    </HStack>
  );
};
