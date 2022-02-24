import { chakra } from '@chakra-ui/react';

export const CardContainer = chakra('div', {
  baseStyle: {
    border: 'dark.s',
    maxW: '400px',
    boxShadow: 'initial',
    transition: 'all .3s ease',
    _hover: { boxShadow: 'noBlur.dark.m' },
  },
});
