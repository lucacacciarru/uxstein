import { ComponentStyleConfig } from "@chakra-ui/react";

export const Radio: ComponentStyleConfig = {
  defaultProps: {
    variant: "outlined",
  },

  variants: {
    outlined: {
      control: {
        borderWidth: "3px",
        borderColor: "black.0",
        _checked: {
          boxShadow: "none",
          color: "brand.primary",
          bg: "none",
          borderColor: "black.0",
          _hover: {
            bg: "none",
            borderColor: "black.0",
          },
        },
        _focus: {
          boxShadow: "none",
          _hover: {
            bg: "none",
            borderColor: "black.0",
          },
        },
        _invalid: {
          borderColor: "status.error",
          bg: "status.errorLighter",
          color: "status.error",
        },
        _disabled: {
          bg: "black.20",
          borderColor: "black.80",
        },
      },
      icon: {
        color: "brand.primary",
      },
    },
  },
};
