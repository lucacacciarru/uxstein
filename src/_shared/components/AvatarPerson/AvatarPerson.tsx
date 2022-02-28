import { Avatar } from '@chakra-ui/react';
import { useMemo } from 'react';
import { Icon } from '../Icon';

type Props = {
  type: 'persona' | 'template';
  author: string;
};

export const AvatarPerson: React.FC<Props> = ({ author, type }) => {
  const renderAvatar = useMemo(() => {
    if (type === 'template') {
      return (
        <Avatar
          data-testid="avatar"
          name={author === 'default' ? undefined : author}
          icon={
            author === 'default' ? (
              <Icon data-testid="icon" name="Frank" />
            ) : undefined
          }
        />
      );
    }
    return <></>;
  }, [author, type]);
  return <>{renderAvatar}</>;
};
