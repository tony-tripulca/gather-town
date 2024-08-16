import React from "react";

import { Box, Container, Typography } from "@mui/material";

import "./Footer.scss";

export default function Footer() {
  return (
    <React.Fragment>
      <Box component={"footer"}>
        <Container maxWidth="false" className="footer-holder">
          <Typography>&copy;2024 Skhillz&trade;</Typography>
        </Container>
      </Box>
    </React.Fragment>
  );
}
