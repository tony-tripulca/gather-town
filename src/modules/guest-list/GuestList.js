import React from "react";
import { Helmet } from "react-helmet";

import { Box, Typography } from "@mui/material";

import "./GuestList.scss";

import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

export default function GuestList() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Guest List | DAP Gather </title>
      </Helmet>
      <Topbar />
      <Sidebar />
      <Box component={"section"} id="guest-list" className="panel">
        <Box className="guest-list-holder">
          <Typography className="section-title">Guest List</Typography>
          <Typography>Work in progress...</Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
}
