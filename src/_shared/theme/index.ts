import { extendTheme } from "@chakra-ui/react";
import { colors, radii, shadows, borders, typography } from "./style";
import { Heading } from "@chakra-ui/react";
import { Text, Button, Link, Input, Tabs } from "./components";

const config = {
  colors,
  radii,
  shadows,
  borders,
  styles: {
    global: {
      ...typography,
    },
  },
  components: {
    Text,
    Heading,
    Button,
    Link,
    Input,
    Tabs,
  },
  fonts: {
    heading: 'Nunito',
    body: 'Lato'
  }
};
export const customTheme = extendTheme(config);
