import { extendTheme } from "@chakra-ui/react";
import { colors, radii, shadows, borders, typography, fonts } from "./style";
import { Heading } from "@chakra-ui/react";
import {
  Text,
  Button,
  Link,
  Input,
  Tabs,
  Menu,
  Checkbox,
  Radio,
  Slider,
  Progress,
  Tag,
  Tooltip,
  Modal,
  Avatar,
  Alert,
} from "./components";

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
    Menu,
    Checkbox,
    Radio,
    Slider,
    Progress,
    Tag,
    Tooltip,
    Modal,
    Alert,
  },
};
export const customTheme = extendTheme(config);
