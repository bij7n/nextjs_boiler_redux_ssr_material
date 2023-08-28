import { Box } from "@mui/material";
import type { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export default function EmptyLayout({ children }: Props) {
  return (
    <Box component="main" sx={{ height: "100%", bgcolor: "background.default" }}>
      {children}
    </Box>
  );
}
