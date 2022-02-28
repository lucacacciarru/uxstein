import { FC } from 'react';

type Props = {
  type: string;
  style: {};
};

export const TextGridItem: FC<Props> = ({ type, style }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        ...style,
      }}
    >
      {type}
    </div>
  );
};
