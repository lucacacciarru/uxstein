import { Avatar } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getUserProfile } from '../../../auth/store/selectors';
import { Icon } from '../../../_shared/components/Icon';

type Props = {
  isDefault: boolean;
};

export const AvatarTemplate: React.FC<Props> = ({ isDefault }) => {
  const username = useSelector(getUserProfile)?.username;
  const renderAvatar = useMemo(() => {
    return (
      <Avatar
        data-testid="avatar"
        name={isDefault ? undefined : username}
        icon={isDefault ? <Icon data-testid="icon" name="Frank" /> : undefined}
      />
    );
  }, [isDefault, username]);
  return <>{renderAvatar}</>;
};
