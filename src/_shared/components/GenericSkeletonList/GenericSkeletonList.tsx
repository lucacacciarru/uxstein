import { Skeleton, SkeletonProps } from '@chakra-ui/react';
import { useMemo } from 'react';

type Props = {
  numberOfItems: number;
  styleChildren?: SkeletonProps;
};

export const GenericSkeletonList: React.FC<Props> = ({
  numberOfItems,
  styleChildren,
}) => {
  const numberOfItemsList = Array.from(Array(numberOfItems).keys());

  const renderSkeletons = useMemo(
    () => numberOfItemsList.map(_ => <Skeleton {...styleChildren} />),
    [numberOfItemsList, styleChildren],
  );
  return <>{renderSkeletons}</>;
};
