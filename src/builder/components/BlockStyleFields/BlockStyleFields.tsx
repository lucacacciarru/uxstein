import { Stack } from '@chakra-ui/react';
import { FC } from 'react';
import { BorderField } from '../BorderField/BorderField';
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
      <BlockColorField
        styleKey="borderColor"
        styleValue={style?.borderColor}
        blockItemId={blockItemId}
      />
      <BorderField
        styleKey="borderWidth"
        styleValue={style?.borderWidth}
        blockItemId={blockItemId}
      />
      <BorderField
        styleKey="borderRadius"
        styleValue={style?.borderRadius}
        blockItemId={blockItemId}
      />
    </Stack>
  );
};
