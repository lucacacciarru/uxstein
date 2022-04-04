import { Box, HStack, Text } from '@chakra-ui/react';

type Props = {
  title: string;
  Avatar?: React.ReactNode;
};

const containerStyles = {
  w: '100%',
  py: '2',
  px: '4',
  justifyContent: 'space-between',
  borderTop: 'dark.s',
};

export const CardContainerInfo: React.FC<Props> = ({
  title,
  Avatar,
  children,
}) => {
  return (
    <HStack {...containerStyles}>
      <Box px="4" py="1" w="70%">
        <Text
          as="h4"
          textStyle="h4"
          __css={{
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            width: '100%',
          }}
        >
          {title}
        </Text>
        {children}
      </Box>
      {Avatar}
    </HStack>
  );
};
