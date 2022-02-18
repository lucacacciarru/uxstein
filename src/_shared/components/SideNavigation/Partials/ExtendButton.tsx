import { IconButton, IconButtonProps } from '@chakra-ui/react';
import { FC } from 'react';
import { Icon } from '../../Icon';

type Props = {
  iconButtonProps: IconButtonProps;
};

export const ExtendButton: FC<Props> = ({ iconButtonProps }) => {
  return (
    <IconButton {...iconButtonProps}>
      <Icon name="ChevronRight" />
    </IconButton>
  );
};
