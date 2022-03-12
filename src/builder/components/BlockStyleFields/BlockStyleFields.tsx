import { Stack } from '@chakra-ui/react';
import { FC } from 'react';
import { BlockColorField } from './BlockColorField';

type Props = {
  style: Record<string, string>;
  blockItemId: string;
};

export const BlockStyleFields: FC<Props> = ({ style, blockItemId }) => {
  return (
    <Stack>
      <BlockColorField
        styleKey="backgroundColor"
        styleValue={style?.backgroundColor}
        blockItemId={blockItemId}
      />
    </Stack>
  );
};
