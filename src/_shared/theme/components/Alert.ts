import { ComponentStyleConfig } from "@chakra-ui/react";

export const Alert: ComponentStyleConfig = {
  variants: {
    "left-accent": {
      container: {
        borderWidth: "3px",
        borderColor: "black.0",
        bg: "white.bg",
        borderRadius: "sm",
        boxShadow: "noBlur.dark.s",
      },
      error: {
        icon: {
          color: "green",
        },
      },
    },
  },
};
