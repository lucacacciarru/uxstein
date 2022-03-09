import { Center, IconButton } from '@chakra-ui/react';
import { FC } from 'react';
import { Icon } from '../../../_shared/components';

type Props = {
  color: string;
};

export const DeleteButton: FC<Props> = ({ color }) => {
  return (
    <Center
      position="absolute"
      top="0"
      right="0"
      pr="2"
      pt="2"
      cursor="pointer"
      className="delete-block"
    >
      <IconButton
        aria-label=""
        variant="unstyled"
        size="icon-sm"
        icon={<Icon name="Delete" color={color} />}
      />
    </Center>
  );
};
