import { IconButton, IconButtonProps } from '@chakra-ui/react';
import { Icon } from '../../../_shared/components';

type Props = {
  disabled: boolean;
  containerRef: React.RefObject<HTMLDivElement>;
  buttonProps: IconButtonProps;
};

export const RightControlButton: React.FC<Props> = ({
  disabled,
  containerRef,
  buttonProps,
}) => {
  const scrollRight = () => {
    const scrollOptions: ScrollToOptions = { left: 300, behavior: 'smooth' };
    containerRef.current?.scrollBy(scrollOptions);
  };
  return (
    <IconButton
      icon={<Icon name={'ChevronRight'} />}
      onClick={scrollRight}
      {...buttonProps}
      disabled={disabled}
      right="0"
      data-testid="controlButtonDx"
    />
  );
};
