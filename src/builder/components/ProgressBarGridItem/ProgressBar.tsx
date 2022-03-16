import { Progress } from '@chakra-ui/react';

type Props = {
  style: Record<string, string> | undefined;
  value: string;
};
export const ProgressBar: React.FC<Props> = ({ style, value }) => {
  return (
    <Progress
      __css={{
        '> div': {
          backgroundColor: style?.progressBarTrackBackgroundColor,
        },
        height: '10px',
      }}
      background={style?.progressBarFilledTrackBackgroundColor}
      borderWidth={style?.progressBarBorderWidth}
      borderRadius={style?.progressBarBorderRadius}
      style={style}
      value={parseInt(value)}
    />
  );
};
