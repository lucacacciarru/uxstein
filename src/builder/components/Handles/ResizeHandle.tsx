import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { Icon } from '../../../_shared/components';

type Props = {
  color: string;
};

export const ResizeHandle: FC<Props> = ({ color }) => {
  return (
    <Box className=".react-resizable-handle">
      <Icon
        name="ResizeIcon"
        size="icon-xs"
        position={'absolute'}
        bottom="0"
        right={'0'}
        color={color}
      />
    </Box>
  );
};
