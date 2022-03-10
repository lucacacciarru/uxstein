import { Stack } from '@chakra-ui/react';
import { FC } from 'react';
import { AttributeName } from '../../store/types';
import { MapAttributeField } from './MapAttributeField';

type Props = {
  blockItemId: string;
  items: AttributeName[];
};

export const Attributes: FC<Props> = ({ items, blockItemId }) => {
  return (
    <Stack spacing={'6'}>
      {items.map(item => (
        <MapAttributeField key={item} name={item} blockItemId={blockItemId} />
      ))}
    </Stack>
  );
};
