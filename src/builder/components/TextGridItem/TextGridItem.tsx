import { Box, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { AttributesModel } from '../../store/types';
import { useTextGridItem } from './useTextGridItem';

type Props = {
  type: string;
  style: {};
  attributes: AttributesModel;
};

export const TextGridItem: FC<Props> = ({ type, style, attributes }) => {
  const { titleValue, subtitleValue } = useTextGridItem(attributes);
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
        {titleValue}
      </Text>

      <Text as="em">{subtitleValue}</Text>
    </Box>
  );
};
