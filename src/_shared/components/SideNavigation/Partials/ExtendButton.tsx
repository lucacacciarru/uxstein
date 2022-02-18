import { IconButton, IconButtonProps } from '@chakra-ui/react';
import { FC } from 'react';
import { Icon } from '../../Icon';

type Props = {
  isExtendedState: boolean;
  toggleIsExtended: () => void;
  iconButtonProps: IconButtonProps;
};

export const ExtendButton: FC<Props> = ({
  isExtendedState,
  toggleIsExtended,
  iconButtonProps,
}) => {
  return (
    <IconButton {...iconButtonProps}>
      <Icon name="ChevronRight" />
    </IconButton>
  );
};
