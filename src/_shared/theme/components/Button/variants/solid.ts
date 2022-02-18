export const solid = {
  color: 'white.pure',
  border: 'dark.s',
  borderColor: 'black.0',
  bg: 'brand.primary',
  _hover: {
    bg: 'brand.primary',
    boxShadow: 'noBlur.dark.m',
    _disabled: {
      background: 'black.80',
      boxShadow: 'none',
    },
  },
  _active: {
    bg: 'brand.dark',
    _disabled: {
      bg: 'black.80',
      boxShadow: 'none',
    },
  },
  _focus: {
    boxShadow: 'none',
  },
  _disabled: {
    bg: 'black.80',
  },
};
