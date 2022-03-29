import { Box, Image } from '@chakra-ui/react';
import { Persona } from '../../../persona/store/types/general';
import { PersonaCardContainerInfo } from './PersonaCardContainerInfo';
import { timeBetweenTwoDays } from './timeBetweenTwoDays';

type Props = { type: 'template' | 'persona' } & Omit<
  Persona,
  'id' | 'builderData'
>;

export const PersonaTemplateContentCard: React.FC<Props> = ({
  createdAt,
  src,
  title,
  updatedAt,
  type,
}) => {
  const timeSinceLastUpdate = timeBetweenTwoDays(createdAt, updatedAt);

  return (
    <>
      <Box w="100%" h="20vh" p="3" background="black.20">
        <Image src={src} w="100%" h="100%" objectFit="contain" />
      </Box>
      <PersonaCardContainerInfo
        title={title}
        type={type}
        timeSinceLastUpdate={timeSinceLastUpdate}
      />
    </>
  );
};
