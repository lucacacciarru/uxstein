import { IconButton, IconButtonProps } from '@chakra-ui/react';
import { Icon } from '../../../_shared/components';

type Props = {
  disabled: boolean;
  containerRef: React.RefObject<HTMLDivElement>;
  buttonProps: IconButtonProps;
};

export const LeftControlButton: React.FC<Props> = ({
  disabled,
  containerRef,
  buttonProps,
}) => {
  const scrollLeft = () => {
    const scrollOptions: ScrollToOptions = { left: -300, behavior: 'smooth' };
    containerRef.current?.scrollBy(scrollOptions);
  };
  return (
    <IconButton
      icon={<Icon name={'ChevronLeft'} />}
      onClick={scrollLeft}
      {...buttonProps}
      disabled={disabled}
      left="0"
      data-testid="controlButtonSx"
    />
  );
};
