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
  cardRef?: React.RefObject<HTMLDivElement>;
};

const cardContainerProps: ChakraProps = {
  cursor: 'pointer',
  flexBasis: '350px',
  flexGrow: '0',
  flexShrink: '0',
  scrollSnapAlign: 'start',
  _last: { scrollSnapAlign: 'end' },
  _first: { ml: '0' },
};

export const PersonCard: React.FC<Props> = ({
  id,
  src,
  title,
  updatedAt,
  author = 'default',
  type,
  createdAt,
  cardRef,
}) => {
  const timeSinceLastUpdate = timeBetweenTwoDays(createdAt, updatedAt);

  return (
    <CardContainer role="card" {...cardContainerProps} ref={cardRef}>
      <OptionPersonCard personaId={id} />
      <Link to={`/app`}>
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
