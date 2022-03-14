import { Box, Progress, Text } from '@chakra-ui/react';
import { useMemo } from 'react';
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
          <Text>{item.label}</Text>
          <Progress value={parseInt(item.value)} />
        </Box>
      )),
    [attributes.progress?.items],
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
      <Text size="" style={attributes.title?.style}>
        {attributes.title?.items[0].value}
      </Text>
      {renderProgressBar}
      <Handles id={id} bg={style.backgroundColor} />
    </Box>
  );
};
