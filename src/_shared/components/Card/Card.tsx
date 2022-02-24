import { Avatar, Box, HStack, Image, Text } from '@chakra-ui/react';
import { useMemo } from 'react';
import { Icon } from '..';
import { CardContainer } from '../CardContainer';
import styles from './Card.module.css';

type Props = {
  src: string;
  title: string;
  lastEdit: string;
  type: 'persona' | 'template';
  author?: string;
};

export const Card: React.FC<Props> = ({
  src,
  title,
  lastEdit,
  author = 'default',
  type,
}) => {
  const renderAvatar = useMemo(() => {
    if (type === 'template') {
      return (
        <Avatar
          data-testid="avatar"
          name={author === 'default' ? undefined : author}
          icon={
            author === 'default' ? (
              <Icon data-testid="icon" name="Frank" />
            ) : undefined
          }
        />
      );
    }
    return <></>;
  }, [author, type]);
  return (
    <CardContainer role={'Card'} width={'20vw'}>
      <Box w="100%" h="20vh" p="3" background="black.20">
        <Image src={src} w="100%" h="100%" objectFit="contain" />
      </Box>
      <HStack
        w="100%"
        py="2"
        px="4"
        justifyContent="space-between"
        borderTop="dark.s"
      >
        <Box px="4" py="1" w="70%">
          <h4 className={styles.cutText}>{title}</h4>
          <Text as="small">{lastEdit}</Text>
        </Box>
        {renderAvatar}
      </HStack>
    </CardContainer>
  );
};
