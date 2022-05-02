import { Box, Stack, Text } from '@chakra-ui/react';
import { useMemo } from 'react';
import { AttributesModel } from '../../store/types';
import { RateItemList } from './RateItemList';

type Props = {
  attributes: AttributesModel;
};

export const RateGridItem: React.FC<Props> = ({ attributes }) => {
  const renderRate = useMemo(
    () =>
      attributes.rate?.items.map(item => (
        <Box key={item.id}>
          <Text mb="1" style={attributes.rate?.style}>
            {item.label}
          </Text>
          <RateItemList
            value={item.value}
            icon={attributes.rate?.style.icon as string}
            color={attributes.rate?.style.colorRateIcon as string}
          />
        </Box>
      )),
    [attributes.rate?.items, attributes.rate?.style],
  );
  return (
    <Box p="4">
      <Text style={attributes.title?.style}>
        {attributes.title?.items[0].value}
      </Text>
      <Stack gap="2">{renderRate}</Stack>
    </Box>
  );
};
