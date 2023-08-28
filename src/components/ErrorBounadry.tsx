import { Box, Stack, Typography } from "@mui/material";
import type { ErrorInfo } from "react";
import React, { Component } from "react";

interface Props {
  children?: JSX.Element;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error("Uncaught error:", error, errorInfo);
    return true;
  }

  public render() {
    return this.state.hasError ? (
      <Box component="main" sx={{ height: "100vh", bgcolor: "background.default" }}>
        <Stack textAlign="center" justifyContent="center" alignItems="center" height="100%" spacing={3}>
          <Typography variant="h3" color="text.secondary">
            متاسفانه خطایی رخ داده است، دوباره تلاش کنید
          </Typography>
        </Stack>
      </Box>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
