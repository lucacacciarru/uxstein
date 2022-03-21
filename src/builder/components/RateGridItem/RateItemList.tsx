import { HStack } from '@chakra-ui/react';
import { useMemo } from 'react';
import { Icon } from '../../../_shared/components';

type Props = {
  value: string;
  color: string;
};

export const RateItemList: React.FC<Props> = ({ color, value }) => {
  const numberOfItems = Array.from(Array(5).keys());

  const renderItemList = useMemo(
    () =>
      numberOfItems.map(item => {
        const numberValue = parseInt(value);
        const selectedOpacity = item >= numberValue ? '0.4' : '1';
        return (
          <Icon
            size="7"
            key={item}
            color={color}
            opacity={selectedOpacity}
            name="Star"
          />
        );
      }),
    [color, numberOfItems, value],
  );
  return <HStack>{renderItemList}</HStack>;
};
