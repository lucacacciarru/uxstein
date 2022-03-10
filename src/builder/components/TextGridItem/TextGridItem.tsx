import { Box, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { AttributesModel } from '../../store/types';
import { Handles } from '../Handles/Handles';

type Props = {
  type: string;
  style: any;
  attributes: AttributesModel;
  id: string;
};
export const TextGridItem: FC<Props> = ({ style, attributes, id }) => {
  return (
    <Box
      style={{
        width: '100%',
        height: '100%',
        ...style,
      }}
      data-testid="text-grid-item"
      p="4"
    >
      <Text style={attributes.title?.style}>{attributes.title?.items[0]}</Text>
      <Text style={attributes.subtitle?.style}>
        {attributes.subtitle?.items[0]}
      </Text>
      <Handles id={id} bg={style.background} />
    </Box>
  );
};
