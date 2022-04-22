import { IconButton } from '@chakra-ui/react';
import { Icon } from '../../../_shared/components';
import { useLockBlockButton } from './useLockBlockButton';

type Props = {
  id: string;
  iconColor: string;
};

export const LockBlockButton: React.FC<Props> = ({ iconColor, id }) => {
  const { iconLockColor, nameIcon, toggleLockBlock } = useLockBlockButton({
    id,
    iconColor,
  });
  return (
    <IconButton
      aria-label=""
      variant="unstyled"
      size="icon-xs"
      icon={<Icon name={nameIcon} color={iconLockColor} />}
      data-testid="deleteButton"
      onClick={toggleLockBlock}
    />
  );
};
