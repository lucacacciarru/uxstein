import { IconButton, IconButtonProps } from '@chakra-ui/react';
import React from 'react';
import { Icon } from '../../Icon';

export const ExtendButton: React.VFC<IconButtonProps> = props => {
  return (
    <IconButton {...props}>
      <Icon name="ChevronRight" />
    </IconButton>
  );
};
