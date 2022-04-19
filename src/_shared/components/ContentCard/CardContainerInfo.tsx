import { Box, Heading, HStack } from '@chakra-ui/react';

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
        <Heading
          as="h4"
          size="h4"
          __css={{
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            width: '100%',
          }}
        >
          {title}
        </Heading>
        {children}
      </Box>
      {Avatar}
    </HStack>
  );
};
