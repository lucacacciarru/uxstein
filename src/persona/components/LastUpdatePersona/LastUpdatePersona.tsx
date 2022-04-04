import { Text } from '@chakra-ui/react';
import { useLastUpdatePersona } from './useLastUpdatePersona';

type Props = {
  lastUpdate: number;
};

export const LastUpdatePersona: React.FC<Props> = ({ lastUpdate }) => {
  const { timeBetween } = useLastUpdatePersona(lastUpdate);
  return <Text as="small">{timeBetween}</Text>;
};
