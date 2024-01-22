/* eslint-disable prettier/prettier */
import { extendTheme } from "@chakra-ui/react";
import { components } from "./components";
import { colors } from "./colors";

export const theme = extendTheme({
  components,
  colors,
});
