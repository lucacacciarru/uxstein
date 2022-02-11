import { extendTheme } from "@chakra-ui/react";
import { colors, radii, shadows, borders, typography } from "./style";
import { Heading } from "@chakra-ui/react";
import { Text, Button, Link } from './components';
const config = {
  colors,
  radii,
  shadows,
  borders,
  styles: {
    global: {
      ...typography
    }
  },
  components: {
    Text,
    Heading,
    Button,
    Link
  }

};
export const customTheme = extendTheme(config);
