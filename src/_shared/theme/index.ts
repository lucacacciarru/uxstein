import { extendTheme } from '@chakra-ui/react';
import {
  colors,
  radii,
  shadows,
  borders,
  typography,
  fonts,
  textStyles,
} from './style';
import { Heading } from '@chakra-ui/react';
import {
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
  Switch,
  Badge,
  Spinner,
  Accordion,
  Textarea
} from './components';

const config = {
  colors,
  radii,
  shadows,
  borders,
  fonts,
  textStyles,
  styles: {
    global: {
      ...typography,
    },
  },
  components: {
    Avatar,
    Accordion,
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
    Switch,
    Badge,
    Spinner,
    Textarea
  },
};
export const customTheme = extendTheme(config);
