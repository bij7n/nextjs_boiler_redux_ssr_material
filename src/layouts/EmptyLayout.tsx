import { Box } from "@mui/material";
import type { FC, PropsWithChildren } from "react";
import React from "react";

const EmptyLayout: FC<PropsWithChildren> = ({ children }) => (
  <Box
    component="main"
    sx={{
      height: "100%",
      bgcolor: "black",
    }}
  >
    {children}
  </Box>
);

export default EmptyLayout;
