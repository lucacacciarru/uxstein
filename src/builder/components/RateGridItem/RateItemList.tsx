import { HStack } from '@chakra-ui/react';
import { useMemo } from 'react';
import { Icon, IconComponentModel } from '../../../_shared/components';

type Props = {
  value: string;
  color: string;
  icon: string;
};

export const RateItemList: React.FC<Props> = ({ color, value, icon }) => {
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
            name={icon as keyof IconComponentModel}
          />
        );
      }),
    [color, icon, numberOfItems, value],
  );
  return <HStack>{renderItemList}</HStack>;
};
