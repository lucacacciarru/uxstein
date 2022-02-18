import { IconButton, IconButtonProps } from '@chakra-ui/react';
import { FC, useMemo } from 'react';
import { Icon } from '../../Icon';
import { iconButtonBaseProps } from '../styles/sideNavStylingProps';

type Props = {
  isExtendedState: boolean;
  toggleIsExtended: () => void;
};

export const ExtendButton: FC<Props> = ({
  isExtendedState,
  toggleIsExtended,
}) => {
  const iconButtonProps: IconButtonProps = useMemo(
    () => ({
      ...iconButtonBaseProps,
      right: isExtendedState ? '-20' : '-8',
      transform: isExtendedState ? 'rotate(-180deg)' : '',
      onClick: toggleIsExtended,
    }),
    [isExtendedState, toggleIsExtended],
  );

  return (
    <IconButton {...iconButtonProps}>
      <Icon name="ChevronRight" />
    </IconButton>
  );
};
