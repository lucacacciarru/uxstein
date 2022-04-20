import { HStack } from '@chakra-ui/react';
import { BackButton } from './BackButton';
import { FileName } from './FileName';
import { HeaderButtons } from './HeaderButtons';

type Props = {
  exportItemRef: React.RefObject<HTMLElement>;
};

export const Header: React.FC<Props> = ({ exportItemRef }) => {
  return (
    <HStack px="8" py="4" w="full">
      <BackButton />
      <FileName />
      <HeaderButtons exportItemRef={exportItemRef} />
    </HStack>
  );
};
