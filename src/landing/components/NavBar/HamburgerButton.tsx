import { Box, BoxProps, IconButton, Stack } from '@chakra-ui/react';
import { FC, useMemo } from 'react';

type Props = {
  onClick: () => void;
  isOpen: boolean;
};

export const HamburgerButton: FC<Props> = ({ onClick, isOpen }) => {
  const linesTransformProp = useMemo(() => {
    if (isOpen) {
      return {
        first: 'rotate(45deg) translateY(8px) translateX(6px)',
        second: 'scale(0)',
        third: 'rotate(-45deg) translateY(-8px) translateX(6px)',
      };
    }
    return {
      first: '',
      second: 'scale(1)',
      third: '',
    };
  }, [isOpen]);

  return (
    <IconButton
      aria-label={isOpen ? 'hamburger-transformed-button' : 'hamburger-button'}
      role="toggle-nav-button"
      variant="ghost"
      size="icon-lg"
      p="4"
      onClick={onClick}
    >
      <Stack spacing="1.5">
        <Line transform={linesTransformProp.first} />
        <Line transform={linesTransformProp.second} />
        <Line transform={linesTransformProp.third} />
      </Stack>
    </IconButton>
  );
};

const Line: FC<BoxProps> = props => {
  return (
    <Box
      as="svg"
      w="8"
      h="1"
      bg="black.0"
      borderRadius="lg"
      transition="all .5s ease"
      {...props}
    />
  );
};
