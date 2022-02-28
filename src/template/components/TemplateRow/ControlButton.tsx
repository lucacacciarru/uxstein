import { IconButton, IconButtonProps } from '@chakra-ui/react';
import { useMemo } from 'react';
import { Icon } from '../../../_shared/components';

type Props = {
  direction: 'sx' | 'dx';
  setCarouselX: React.Dispatch<React.SetStateAction<number>>;
  disabled: boolean;
};

const buttonProps: IconButtonProps = {
  top: '40%',
  minW: '50px',
  h: '50px',
  position: 'absolute',
  'aria-label': 'Control button',
};

export const ControlButton: React.FC<Props> = ({
  direction,
  setCarouselX,
  disabled,
}) => {
  const controlProps = useMemo(
    () =>
      direction === 'sx'
        ? {
            ...buttonProps,
            onClick: () => setCarouselX(prev => prev + 1),
            left: '20px',
          }
        : {
            ...buttonProps,
            onClick: () => setCarouselX(prev => prev - 1),
            right: '20px',
          },
    [direction, setCarouselX],
  );
  return (
    <IconButton
      icon={<Icon name={direction === 'sx' ? 'ChevronLeft' : 'ChevronRight'} />}
      data-testid={`controlButton${direction}`}
      disabled={disabled}
      {...controlProps}
    />
  );
};
