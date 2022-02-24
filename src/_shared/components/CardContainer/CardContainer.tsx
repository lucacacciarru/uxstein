import { chakra } from '@chakra-ui/react';

export const CardContainer = chakra('div', {
  baseStyle: {
    border: 'dark.s',
    boxShadow: 'initial',
    transition: 'all .3s ease',
    _hover: { boxShadow: 'noBlur.dark.m' },
  },
});
