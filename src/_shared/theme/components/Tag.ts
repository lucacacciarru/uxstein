import { ComponentStyleConfig } from "@chakra-ui/react";

export const Tag: ComponentStyleConfig = {
  defaultProps: {
    variant: "outline",
  },
  variants: {
    outline: {
      container: {
        bg: "none",
        boxShadow: "none",
        borderRadius: "none",
      },
      label: {
        borderWidth: "3px",
        borderColor: "black.0",
        color: "black.0",
        p: "0.4rem 1rem",
        boxShadow: "initial",
        transition: "all .2s ease",

        _hover: {
          boxShadow: "noBlur.dark.s",
        },
      },
      closeButton: {
        color: "black.80",
        opacity: "1",
        _hover: {
          opacity: "1",
          color: "black.0",
        },
      },
    },
  },
};
