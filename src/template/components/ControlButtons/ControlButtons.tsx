import { IconButtonProps } from '@chakra-ui/react';
import { FC } from 'react';
import { LeftControlButton } from './LeftControlButton';
import { RightControlButton } from './RightControlButton';

const buttonProps: IconButtonProps = {
  top: '40%',
  minW: '50px',
  h: '50px',
  position: 'absolute',
  'aria-label': 'Control button',
};

type Props = {
  disabled?: 'left' | 'right';
  containerRef: React.RefObject<HTMLDivElement>;
};

export const ControlButtons: FC<Props> = ({ containerRef, disabled }) => {
  return (
    <>
      <LeftControlButton
        disabled={disabled === 'left'}
        containerRef={containerRef}
        buttonProps={buttonProps}
      />
      <RightControlButton
        disabled={disabled === 'right'}
        containerRef={containerRef}
        buttonProps={buttonProps}
      />
    </>
  );
};
