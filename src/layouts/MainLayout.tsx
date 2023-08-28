// import dynamic from "next/dynamic";
import { Box } from "@mui/material";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <Box
      component="main"
      sx={{
        height: "100%",
        bgcolor: "background.default",
      }}
    >
      {children}
    </Box>
  );
}
