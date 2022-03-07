import { Box, ChakraProps, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { CardContainer } from '../CardContainer';
import { OptionPersonCard } from '../OptionPersonCard';
import { PersonCardContainerInfo } from './PersonCardContainerInfo';
import { timeBetweenTwoDays } from './timeBetweenTwoDays';

type Props = {
  id: string;
  src: string;
  title: string;
  createdAt: number;
  updatedAt: number;
  type: 'persona' | 'template';
  author?: string;
};

const cardContainerProps: ChakraProps = {
  maxW: '350px',
  minW: '350px',
  w: '20vw',
  cursor: 'pointer',
  position: 'relative',
};

export const PersonCard: React.FC<Props> = ({
  id,
  src,
  title,
  updatedAt,
  author = 'default',
  type,
  createdAt,
}) => {
  const timeSinceLastUpdate = timeBetweenTwoDays(createdAt, updatedAt);

  return (
    <CardContainer role="card" {...cardContainerProps}>
      <OptionPersonCard idPersona={id} />
      <Link to={`/builder/${title}`}>
        <Box w="100%" h="20vh" p="3" background="black.20">
          <Image src={src} w="100%" h="100%" objectFit="contain" />
        </Box>
        <PersonCardContainerInfo
          title={title}
          type={type}
          timeSinceLastUpdate={timeSinceLastUpdate}
          author={author}
        />
      </Link>
    </CardContainer>
  );
};
