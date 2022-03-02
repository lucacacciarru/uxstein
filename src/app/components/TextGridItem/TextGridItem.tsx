import { Box } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  type: string;
  style: {};
};

export const TextGridItem: FC<Props> = ({ type, style }) => {
  return (
    <Box
      style={{
        width: '100%',
        height: '100%',
        ...style,
      }}
    >
      {type}
    </Box>
  );
};
