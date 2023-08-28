declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    tiny: true;
    buttonSmall: true;
    buttonLarge: true;
    banner: true;
  }
}

function pxToRem(value: number) {
  return `${value / 16}rem`;
}

const typography = {
  fontFamily: "IranyekanNumeral",
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    fontSize: pxToRem(48),
    letterSpacing: 2,
  },
  h2: {
    fontWeight: 700,
    fontSize: pxToRem(40),
  },
  h3: {
    fontWeight: 700,
    fontSize: pxToRem(32),
  },
  h4: {
    fontWeight: 700,
    fontSize: pxToRem(24),
  },
  h5: {
    fontWeight: 700,
    fontSize: pxToRem(20),
  },
  h6: {
    fontWeight: 700,
  },
  subtitle1: {
    fontWeight: 500,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontWeight: 500,
    fontSize: pxToRem(14),
  },
  body1: {
    fontWeight: 400,
    fontSize: pxToRem(16),
  },
  body2: {
    fontWeight: 400,
    fontSize: pxToRem(14),
  },
  caption: {
    fontWeight: 400,
    fontSize: pxToRem(12),
  },
  overline: {
    fontWeight: 700,
    fontSize: pxToRem(12),
    textTransform: "uppercase",
  },
  buttonSmall: {
    fontWeight: 700,
    fontSize: pxToRem(12),
  },
  buttonLarge: {
    fontWeight: 700,
    fontSize: pxToRem(14),
  },
  tiny: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: pxToRem(10),
  },
  banner: {
    fontWeight: 700,
  },
} as const;

export default typography;
