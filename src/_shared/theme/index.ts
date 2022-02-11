import { extendTheme } from "@chakra-ui/react";
import styles from "./styles";
import { Heading } from "@chakra-ui/react";

const config = {
  styles,
  components: {
    Heading,
  },
};
export const customTheme = extendTheme(config);
