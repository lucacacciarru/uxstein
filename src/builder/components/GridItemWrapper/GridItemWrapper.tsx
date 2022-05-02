import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { Handles } from '../Handles/Handles';
import { useGridItemWrapper } from './useGridItemWrapper';

type Props = {
  style: Record<string, string>;
  id: string;
};

export const GridItemWrapper: FC<Props> = ({ style, id, children }) => {
  const { opacity, select } = useGridItemWrapper(id);
  return (
    <Box
      m="0"
      w="full"
      h="full"
      transition="opacity .5s ease-in-out"
      style={{
        width: '100%',
        height: '100%',
        ...style,
      }}
      data-testid="text-grid-item"
      opacity={opacity}
      onClick={select}
    >
      {children}
      <Handles id={id} bg={style.backgroundColor} />
    </Box>
  );
};
