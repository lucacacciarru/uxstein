import { extendTheme } from "@chakra-ui/react";
import { colors, radii, shadows, borders, typography, fonts } from "./style";
import { Heading } from "@chakra-ui/react";
import { Text, Button, Link, Input, Tabs, Avatar } from "./components";

const config = {
  colors,
  radii,
  shadows,
  borders,
  fonts,
  styles: {
    global: {
      ...typography,
    },
  },
  components: {
    Avatar,
    Text,
    Heading,
    Button,
    Link,
    Input,
    Tabs,
  },
};
export const customTheme = extendTheme(config);
