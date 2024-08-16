import React from "react";

import { Box, Typography } from "@mui/material";

import "./Footer.scss";

export default function Footer() {
  return (
    <React.Fragment>
      <Box component={"footer"}>
        <Box className="footer-holder">
          <Typography>&copy;2024 DAP Brands&trade;</Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
}
