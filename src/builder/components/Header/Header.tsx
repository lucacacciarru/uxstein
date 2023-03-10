import { HStack } from '@chakra-ui/react';
import { BackButton } from './BackButton';
import { FileName } from './FileName';
import { HeaderButtons } from './HeaderButtons';

export const Header: React.FC = () => {
  return (
    <HStack px="8" py="4" w="full">
      <BackButton />
      <FileName />
      <HeaderButtons />
    </HStack>
  );
};
