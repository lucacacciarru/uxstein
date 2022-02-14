import type { ComponentStyleConfig } from "@chakra-ui/react";

export const Checkbox: ComponentStyleConfig = {
  defaultProps: {
    variant: "outlined",
  },

  variants: {
    outlined: {
      control: {
        borderWidth: "3px",
        borderColor: "black.0",
        boxShadow: "none",
        _focus: {
          boxShadow: "none",
        },
        _checked: {
          bg: "none",
          borderColor: "black.0",
          boxShadow: "none",
          _hover: {
            bg: "none",
            borderColor: "black.0",
          },
        },
        _invalid: {
          borderColor: "status.error",
          borderWidth: "3px",
          color: "status.error",
          bg: "status.errorLighter",
          _hover: {
            bg: "status.errorLighter",
            borderColor: "status.error",
          },
        },
        _disabled: {
          bg: "black.20",
          borderColor: "black.50",
          _checked: {
            bg: "black.20",
            borderColor: "black.50",
          },
        },
      },
      icon: {
        color: "brand.primary",
      },
    },
  },
};
