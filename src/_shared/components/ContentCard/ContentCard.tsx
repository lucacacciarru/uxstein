import { Box, Image } from '@chakra-ui/react';
import { CardContainerInfo } from './CardContainerInfo';

type Props = {
  src: string;
  title: string;
  Avatar?: React.ReactNode;
};

export const ContentCard: React.FC<Props> = ({
  src,
  title,
  Avatar,
  children,
}) => {
  return (
    <>
      <Box w="100%" h="20vh" p="3" background="black.20">
        <Image src={src} w="100%" h="100%" objectFit="contain" />
      </Box>
      <CardContainerInfo title={title} Avatar={Avatar}>
        {children}
      </CardContainerInfo>
    </>
  );
};
