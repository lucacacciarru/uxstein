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
          border: 'none',
        },
        height: '10px',
      }}
      background={style?.progressBarFilledTrackBackgroundColor}
      border={`1.5px solid ${style?.progressBarBorderColor}`}
      style={style}
      value={parseInt(value)}
    />
  );
};
