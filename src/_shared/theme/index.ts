import { extendTheme } from "@chakra-ui/react";
import { colors, radii } from './style';
import { Heading } from "@chakra-ui/react";

const config = {
  colors,
  radii,
  components: {
    Heading,
  },
};
export const customTheme = extendTheme(config);
