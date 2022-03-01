import { Box, HStack, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { BlockSetup } from '../../hooks/useBlockSetup';
import { useOptionalSettings } from './useOptionalSettings';

type Props = {
  title: string;
  optionalSettings?: BlockSetup['optionalSettings'];
};

export const EditTabHeader: FC<Props> = ({ title, optionalSettings }) => {
  const { settingsWithDefault } = useOptionalSettings(optionalSettings);

  return (
    <Box as={'header'} pl="4" mb="8" mt="4">
      <Text fontSize="4xl">{title}</Text>
      <HStack spacing="8">
        <p>
          Min-size: {settingsWithDefault.minW} x {settingsWithDefault.minH}
        </p>
        <p>
          Max-size: {settingsWithDefault.maxW} x {settingsWithDefault.maxH}
        </p>
      </HStack>
    </Box>
  );
};
