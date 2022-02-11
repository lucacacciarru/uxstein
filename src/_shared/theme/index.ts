import { extendTheme } from "@chakra-ui/react";
import { colors, radii, shadows, borders } from "./style";
import { Heading } from "@chakra-ui/react";

const config = {
  colors,
  radii,
  shadows,
  borders,
  components: {
    Heading,
  },
};
export const customTheme = extendTheme(config);
