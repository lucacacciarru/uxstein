import { Box, ChakraProps, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Persona } from '../../../persona/store/types/general';
import { CardContainer } from '../CardContainer';
import { OptionPersonCard } from '../OptionPersonCard';
import { PersonCardContainerInfo } from './PersonCardContainerInfo';
import { timeBetweenTwoDays } from './timeBetweenTwoDays';

type Props = {
  author?: string;
  type: 'persona' | 'template';
  cardRef?: React.RefObject<HTMLDivElement>;
} & Persona;

const cardContainerProps: ChakraProps = {
  cursor: 'pointer',
  flexBasis: '350px',
  flexGrow: '0',
  flexShrink: '0',
  scrollSnapAlign: 'start',
  _last: { scrollSnapAlign: 'end' },
  _first: { ml: '0' },
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
  cardRef,
}) => {
  const timeSinceLastUpdate = timeBetweenTwoDays(createdAt, updatedAt);

  return (
    <CardContainer role="card" {...cardContainerProps} ref={cardRef}>
      <OptionPersonCard personaId={id} />
      <Link to={`${id}/edit`}>
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
