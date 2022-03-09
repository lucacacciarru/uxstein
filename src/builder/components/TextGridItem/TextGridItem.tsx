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
export const TextGridItem: FC<Props> = ({ type, style, attributes, id }) => {
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
      <Text as="h2" textStyle="h2">
        {attributes.title?.value}
      </Text>
      <Text as="em">{attributes.subtitle?.value}</Text>
      <Handles id={id} bg={style.background} />
    </Box>
  );
};
