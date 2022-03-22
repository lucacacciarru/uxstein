import { Button, ButtonProps } from '@chakra-ui/react';
import { useMemo } from 'react';

const buttonProps: ButtonProps = {
  minW: '6',
  h: '6',
  p: '0',
  borderRadius: '100%',
  border: 'dark.s',
};

type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  index: number;
  valueRate: string;
};

export const RateButton: React.FC<Props> = ({ index, onClick, valueRate }) => {
  const fillColor = useMemo(
    () => (index <= parseInt(valueRate) ? 'brand.primary' : 'black.20'),
    [index, valueRate],
  );
  return (
    <Button
      variant="unstyled"
      aria-label="rateButton"
      onClick={onClick}
      bg={fillColor}
      {...buttonProps}
    />
  );
};
