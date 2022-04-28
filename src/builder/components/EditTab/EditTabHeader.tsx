import { Box, HStack, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { BlockSetup } from '../../hooks/useBlockSetup';
import { BackButton } from '../ToolBar/BackButton';
import { useOptionalSettings } from './useOptionalSettings';

type Props = {
  title: string;
  optionalSettings?: BlockSetup['optionalSettings'];
};

export const EditTabHeader: FC<Props> = ({ title, optionalSettings }) => {
  const { settingsWithDefault } = useOptionalSettings(optionalSettings);

  return (
    <Box as={'header'} pl="4" mb="8">
      <BackButton />
      <Text fontSize="4xl" textTransform="capitalize" mt="4">
        {title}
      </Text>
      <HStack spacing="8">
        <Text>
          Min-size: {settingsWithDefault.minW} x {settingsWithDefault.minH}
        </Text>
        <Text>
          Max-size: {settingsWithDefault.maxW} x {settingsWithDefault.maxH}
        </Text>
      </HStack>
    </Box>
  );
};
