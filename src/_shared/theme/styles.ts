import { extendTheme } from "@chakra-ui/react";
//Todo: valutare se sia meglio suddividere anche tutti i global style

const config = {
  colors: {
    primary: "#05C46B",
    primaryLight: "#1FF994",
    primaryLighter: "#83FCC3",
    primaryLightest: "#B4FDDB",
    primaryDark: "#04AE5F",
    primaryDarker: "#03713E",
    primaryDarkest: "#024425",
    black: {
      0: "#1B1B1B",
      20: "#D5D5DB",
      50: "#9597A5",
      80: "#55586E",
    },
    error: "#D51A52",
    attention: "#FF9500",
    approval: "#00B998",
    link: "#0F0BAB",
  },
  radii: {
    none: "0",
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1.5rem",
    full: "50%",
  },
  textStyles: {
    h1: {
      fontSize: "90px",
    },
    h2: {
      letterSpacing: "-7%",
    },
  },
};

export default config;
