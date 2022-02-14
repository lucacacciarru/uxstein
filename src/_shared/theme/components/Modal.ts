import { ComponentStyleConfig } from "@chakra-ui/react";

export const Modal: ComponentStyleConfig = {
  defaultProps: {
    variant: "outlined",
  },
  variants: {
    outlined: {
      dialog: {
        boxShadow: "noBlur.dark.s",
        borderWidth: "3px",
        borderColor: "black.0",
      },
      closeButton: {
        _focus: {
          boxShadow: "none",
        },
      },
    },
  },
};
