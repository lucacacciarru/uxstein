import type { ComponentStyleConfig } from "@chakra-ui/react";

export const Input: ComponentStyleConfig = {
  defaultProps: {
    variant: "outline",
  },
  variants: {
    outline: {
      field: {
        border: "dark.s",
        borderColor: "black.0",
        borderRadius: "none",
        color: "black.0",
        _hover: {
          borderColor: "brand.primary",
        },
        _focus: {
          borderColor: "brand.primary",
          outline: "none",
          boxShadow: "none",
        },
        _invalid: {
          borderColor: "status.error",
        },
        _disabled: {
          border: "dark.s",
          borderColor: "black.50",
          borderRadius: "none",
          background: "black.20",
          cursor: "not-allowed",
        },
      },
    },
  },
};
