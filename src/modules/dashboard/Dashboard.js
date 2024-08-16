import React from "react";
import { Helmet } from "react-helmet";

import { Box, Typography } from "@mui/material";

import "./Dashboard.scss";

export default function Dashboard() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Dashboard | DAP Gather </title>
      </Helmet>
      <Box component={"section"} id="dashboard">
        <Box classnName="dahboard-holder">
          <Typography>Dashboard</Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
}
