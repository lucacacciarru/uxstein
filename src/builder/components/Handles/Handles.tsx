import { FC, useMemo } from 'react';
import { DeleteButton } from './DeleteButton';
import { ResizeHandle } from './ResizeHandle';
import { getContrast } from 'polished';

type Props = {
  id: string;
  bg?: string;
};

export const Handles: FC<Props> = ({ bg = '#fff', id }) => {
  const iconColor = useMemo(() => {
    const contrastRatio = getContrast(bg, '#fff');
    return contrastRatio < 1.95 ? 'black.0' : 'white.pure';
  }, [bg]);

  return (
    <>
      <ResizeHandle color={iconColor} />
      <DeleteButton id={id} color={iconColor} />
    </>
  );
};
