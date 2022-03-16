import { useMemo } from 'react';
import { SkeletonPersonCard } from './SkeletonPersonCard';

type Props = {
  numberOfItems: number;
};

export const SkeletonPersonCardList: React.FC<Props> = ({ numberOfItems }) => {
  const numberOfItemsList = Array.from(Array(numberOfItems).keys());

  const renderItems = useMemo(
    () => numberOfItemsList.map(item => <SkeletonPersonCard key={item} />),
    [numberOfItemsList],
  );
  return <>{renderItems}</>;
};
