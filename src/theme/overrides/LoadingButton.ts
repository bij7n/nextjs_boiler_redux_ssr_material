import type { Theme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function LoadingButton(theme: Theme) {
  return {
    MuiLoadingButton: {
      styleOverrides: {
        root: {
          borderRadius: theme.spacing(1),
          "&.MuiButton-text": {
            "& .MuiLoadingButton-startIconPendingStart": {
              marginLeft: 0,
            },
            "& .MuiLoadingButton-endIconPendingEnd": {
              marginRight: 0,
            },
          },
        },
      },
    },
  };
}
