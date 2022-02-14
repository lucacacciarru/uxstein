import type { ComponentStyleConfig } from "@chakra-ui/react";
import { line } from "./line";
import { softRounded } from "./softRounded";
export const Tabs: ComponentStyleConfig = {
  variants: {
    line,
    ...softRounded,
  },
};
