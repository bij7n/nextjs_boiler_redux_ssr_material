import { createTheme, responsiveFontSizes } from "@mui/material/styles";

import breakpoints from "./breakpoints";
import componentsOverride from "./overrides";
import palette from "./palette";
import shadows, { customShadows } from "./shadows";
import typography from "./typography";

const theme = responsiveFontSizes(
  createTheme({
    palette: palette.dark,
    typography,
    breakpoints,
    shape: { borderRadius: 8 },
    direction: "rtl",
    shadows: shadows.dark,
    customShadows: customShadows.dark,
  })
);
theme.components = componentsOverride(theme);

export default theme;
