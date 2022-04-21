import { Stack } from '@chakra-ui/react';
import { FC, useMemo } from 'react';
import { MediaShowcaseRow } from './MediaShowcaseRow';

type Props = {
  rows: string[][];
};

export const MediaShowcaseRows: FC<Props> = ({ rows }) => {
  const renderedRows = useMemo(
    () =>
      rows.map((row, i) => (
        <MediaShowcaseRow
          animate={{
            x: i % 2 === 0 ? ['-30%', '-0%'] : ['-0%', '-30%'],
          }}
          srcList={row}
          key={i}
        />
      )),
    [rows],
  );

  return <Stack spacing="6">{renderedRows}</Stack>;
};
