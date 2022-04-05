import { chakra } from '@chakra-ui/react';

export const CardContainer = chakra('div', {
  baseStyle: {
    border: 'dark.s',
    boxShadow: 'initial',
    transition: 'all .3s ease',
    _hover: { boxShadow: 'noBlur.dark.m' },
    cursor: 'pointer',
    flexBasis: '350px',
    flexGrow: '0',
    flexShrink: '0',
    scrollSnapAlign: 'start',
    _last: { scrollSnapAlign: 'end' },
    _first: { ml: '0' },
    position: 'relative',
  },
});
