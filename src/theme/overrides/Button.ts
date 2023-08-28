import type { Theme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function Button(theme: Theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: theme.spacing(1),
          // "&:hover": {
          //   boxShadow: "none",
          // },
        },
        sizeLarge: {
          height: 48,
        },
        sizeMedium: {
          height: 40,
        },
        sizeSmall: {
          height: 32,
        },
        // contained
        containedInherit: {
          color: theme.palette.grey[800],
          // boxShadow: theme.customShadows.z8,
          "&:hover": {
            backgroundColor: theme.palette.grey[400],
          },
        },
        // containedPrimary: {
        //   boxShadow: theme.customShadows.primary,
        // },
        // containedSecondary: {
        //   boxShadow: theme.customShadows.secondary,
        // },
        // containedInfo: {
        //   boxShadow: theme.customShadows.info,
        // },
        // containedSuccess: {
        //   boxShadow: theme.customShadows.success,
        // },
        // containedWarning: {
        //   boxShadow: theme.customShadows.warning,
        // },
        // containedError: {
        //   boxShadow: theme.customShadows.error,
        // },
        // outlined
        outlinedInherit: {
          border: `1px solid ${theme.palette.grey[500_32]}`,
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
        textInherit: {
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  };
}
