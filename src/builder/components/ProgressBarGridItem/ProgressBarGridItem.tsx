import { Box, Stack, Text } from '@chakra-ui/react';
import { useMemo } from 'react';
import { AttributesModel } from '../../store/types';
import { Handles } from '../Handles/Handles';
import { ProgressBar } from './ProgressBar';

type Props = {
  style: Record<string, string>;
  attributes: AttributesModel;
  id: string;
};

export const ProgressbarGridItem: React.FC<Props> = ({
  style,
  attributes,
  id,
}) => {
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
      <Stack gap={'2'}>{renderProgressBar}</Stack>
      <Handles id={id} bg={style.backgroundColor} />
    </Box>
  );
};
