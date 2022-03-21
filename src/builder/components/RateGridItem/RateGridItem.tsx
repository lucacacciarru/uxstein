import { Box, Stack, Text } from '@chakra-ui/react';
import { useMemo } from 'react';
import { AttributesModel } from '../../store/types';
import { Handles } from '../Handles/Handles';
import { RateItemList } from './RateItemList';

type Props = {
  style: Record<string, string>;
  attributes: AttributesModel;
  id: string;
};

export const RateGridItem: React.FC<Props> = ({ attributes, id, style }) => {
  const renderRate = useMemo(
    () =>
      attributes.rate?.items.map(item => (
        <Box key={item.id}>
          <Text mb="1" style={attributes.rate?.style}>
            {item.label}
          </Text>
          <RateItemList
            value={item.value}
            color={attributes.rate?.style.colorRateIcon as string}
          />
        </Box>
      )),
    [attributes.rate?.items, attributes.rate?.style],
  );
  return (
    <Box
      p="4"
      style={{
        width: '100%',
        height: '100%',
        ...style,
      }}
    >
      <Text style={attributes.title?.style}>
        {attributes.title?.items[0].value}
      </Text>
      <Stack gap="2">{renderRate}</Stack>
      <Handles id={id} bg={style.backgroundColor} />
    </Box>
  );
};
