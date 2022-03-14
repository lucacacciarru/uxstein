import { Box, HStack, Progress, Stack, Text } from '@chakra-ui/react';
import { CSSProperties, useMemo } from 'react';
import { AttributesModel } from '../../store/types';
import { Handles } from '../Handles/Handles';

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
          <Progress
            __css={{
              '> div': {
                backgroundColor:
                  attributes.progress?.style.progressBarTrackBackgroundColor,
                border: 'none',
              },
              height: '10px',
            }}
            background={
              attributes.progress?.style.progressBarFilledTrackBackgroundColor
            }
            border={`1.5px solid ${attributes.progress?.style.progressBarBorderColor}`}
            style={attributes.progress?.style}
            value={parseInt(item.value)}
          />
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
