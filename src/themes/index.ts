/* eslint-disable prettier/prettier */
import { extendTheme } from "@chakra-ui/react";
import { components } from "./components";
import { colors } from "./colors";

export const theme = extendTheme({
  components,
  colors,
  styles: {
    global: {
      "::-webkit-scrollbar": {
        width: "8px",
        backgroundColor: "secondary.50",
      },
      "::-webkit-scrollbar-thumb": {
        backgroundColor: "primary.400",
        borderRadius: "full",
      },
      "::-webkit-scrollbar-thumb:hover": {
        backgroundColor: "brand.600",
      },
    },
  },
});
