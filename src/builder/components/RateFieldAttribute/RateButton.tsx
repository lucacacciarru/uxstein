import { ButtonProps, IconButton } from '@chakra-ui/react';
import { useMemo } from 'react';
import { Icon } from '../../../_shared/components';

const buttonProps: ButtonProps = {
  minW: '30px',
  h: '30px',
  p: '0',
  borderRadius: '100%',
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
    <IconButton
      variant="ghost"
      aria-label="rateButton"
      onClick={onClick}
      icon={<Icon name="Star" color={fillColor} />}
      {...buttonProps}
    />
  );
};
