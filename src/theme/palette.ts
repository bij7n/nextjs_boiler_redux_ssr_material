import { alpha } from "@mui/material/styles";

function createGradient(color1: string, color2: string) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

export type ColorSchema = "primary" | "secondary" | "info" | "success" | "warning" | "error";

interface GradientsPaletteOptions {
  primary: string;
  info: string;
  success: string;
  warning: string;
  error: string;
}

interface ChartPaletteOptions {
  violet: string[];
  blue: string[];
  green: string[];
  yellow: string[];
  red: string[];
}

declare module "@mui/material/styles/createPalette" {
  interface TypeBackground {
    neutral: string;
    shadeNeutral: string;
    darkest: string;
  }
  interface SimplePaletteColorOptions {
    lighter: string;
    darker: string;
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
  }
  interface Palette {
    gradients: GradientsPaletteOptions;
    chart: ChartPaletteOptions;
  }
  interface PaletteOptions {
    gradients: GradientsPaletteOptions;
    chart: ChartPaletteOptions;
  }
  interface TypeText {
    primary: string;
    secondary: string;
    tertiary: string;
    disabled: string;
    pink: string;
    green: string;
    title: string;
  }
}

declare module "@mui/material" {
  interface Color {
    1000: string;
    500_8: string;
    500_12: string;
    500_16: string;
    500_24: string;
    500_32: string;
    500_48: string;
    500_56: string;
    500_80: string;
  }
}

// SETUP COLORS
export const PRIMARY = {
  lighter: "#F48FB1",
  light: "#f06292",
  main: "#f02867",
  dark: "#C92659",
  darker: "#A3244C",
};
export const SECONDARY = {
  lighter: "#b9f6ca",
  light: "#80E8BF",
  main: "#1cb561",
  dark: "#137C52",
  darker: "#00c853",
};
export const INFO = {
  lighter: "#E9E9E9",
  light: "#D2D2D2",
  main: "#9E9E9E",
  dark: "#757575",
  darker: "#494949",
};
export const SUCCESS = {
  lighter: "#a5d6a7",
  light: "#69f0ae",
  main: "#00ab62",
  dark: "#00c853",
  darker: "#43a047",
};
export const WARNING = {
  lighter: "#FFF7CD",
  light: "#FFE16A",
  main: "#FFC107",
  dark: "#B78103",
  darker: "#7A4F01",
};
export const ERROR = {
  lighter: "#f44336",
  light: "#e53935",
  main: "#c62828",
  dark: "#b71c1c",
  darker: "#b71c1c",
};

export const GREY = {
  100: "#E9E9E9",
  200: "#D2D2D2",
  300: "#9E9E9E",
  400: "#757575",
  500: "#494949",
  600: "#393939",
  700: "#262626",
  800: "#212121",
  900: "#1C1C1C",
  1000: "#101010",
  500_8: alpha("#494949", 0.08),
  500_12: alpha("#494949", 0.12),
  500_16: alpha("#494949", 0.16),
  500_24: alpha("#494949", 0.24),
  500_32: alpha("#494949", 0.32),
  500_48: alpha("#494949", 0.48),
  500_56: alpha("#494949", 0.56),
  500_80: alpha("#494949", 0.8),
};

export const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
};

export const CHART_COLORS = {
  violet: ["#826AF9", "#9E86FF", "#D0AEFF", "#F7D2FF"],
  blue: ["#2D99FF", "#83CFFF", "#A5F3FF", "#CCFAFF"],
  green: ["#2CD9C5", "#60F1C8", "#A4F7CC", "#C0F2DC"],
  yellow: ["#FFE700", "#FFEF5A", "#FFF7AE", "#FFF3D6"],
  red: ["#FF6C40", "#FF8F6D", "#FFBD98", "#FFF2D4"],
};

const COMMON = {
  common: { black: "#000", white: "#fff" },
  primary: { ...PRIMARY, contrastText: "#fff" },
  secondary: { ...SECONDARY, contrastText: "#fff" },
  info: { ...INFO, contrastText: "#fff" },
  success: { ...SUCCESS, contrastText: GREY[800] },
  warning: { ...WARNING, contrastText: GREY[800] },
  error: { ...ERROR, contrastText: "#fff" },
  grey: GREY,
  gradients: GRADIENTS,
  chart: CHART_COLORS,
  divider: GREY[500],
  action: {
    active: GREY[500],
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

const palette = {
  light: {
    ...COMMON,
    mode: "light",
    text: {
      primary: GREY[800],
      secondary: GREY[600],
      tertiary: "#f0f0f0",
      caption: "#D2D2D2",
      title: "#9E9E9E",
      icon: "#494949",
      pink: "#f02867",
      green: "#1cb561",
    },
    background: {
      paper: GREY[700],
      default: GREY[900],
      darkest: GREY[1000],
      card: GREY[800],
      neutral: GREY[600],
      shade: alpha("#000000", 0.6),
    },
    action: { ...COMMON.action, active: GREY[600] },
  },
  dark: {
    ...COMMON,
    mode: "dark",
    text: {
      primary: "#fff",
      secondary: "#B8B8B8",
      tertiary: "#f0f0f0",
      caption: "#D2D2D2",
      title: "#9E9E9E",
      icon: "#494949",
      pink: "#f02867",
      green: "#1cb561",
    },
    background: {
      paper: GREY[700],
      default: GREY[900],
      darkest: GREY[1000],
      card: GREY[800],
      neutral: GREY[600],
      shade: alpha("#000000", 0.6),
    },
    action: { ...COMMON.action, active: GREY[500] },
  },
} as const;

export default palette;
