import { Box, BoxProps, IconButton, Stack } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  onClick: () => void;
  isOpen: boolean;
};

export const HamburgerButton: FC<Props> = ({ onClick, isOpen }) => {
  return (
    <IconButton
      aria-label="hamburger-button"
      variant="ghost"
      size="icon-lg"
      p="4"
      onClick={onClick}
    >
      <Stack spacing="1.5">
        <Line
          transform={
            isOpen ? 'rotate(45deg) translateY(8px) translateX(6px)' : ''
          }
        />
        <Line transform={isOpen ? 'scale(0)' : 'scale(1)'}></Line>
        <Line
          transform={
            isOpen ? 'rotate(-45deg) translateY(-8px) translateX(6px)' : ''
          }
        ></Line>
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
    ></Box>
  );
};
