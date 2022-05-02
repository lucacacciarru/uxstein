import { Box, Stack, Text } from '@chakra-ui/react';
import { useMemo } from 'react';
import { AttributesModel } from '../../store/types';
import { ProgressBar } from './ProgressBar';

type Props = {
  attributes: AttributesModel;
};

export const ProgressbarGridItem: React.FC<Props> = ({ attributes }) => {
  const renderProgressBar = useMemo(
    () =>
      attributes.progress?.items.map(item => (
        <Box data-testid="progressbar" key={item.id}>
          <Text mb="1" style={attributes.progress?.style}>
            {item.label}
          </Text>
          <ProgressBar style={attributes.progress?.style} value={item.value} />
        </Box>
      )),
    [attributes.progress?.items, attributes.progress?.style],
  );
  return (
    <Box p="4">
      <Text style={attributes.title?.style}>
        {attributes.title?.items[0].value}
      </Text>
      <Stack gap={'2'}>{renderProgressBar}</Stack>
    </Box>
  );
};
