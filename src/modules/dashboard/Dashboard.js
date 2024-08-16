import React from "react";
import { Helmet } from "react-helmet";

import { Box, Typography } from "@mui/material";

import "./Dashboard.scss";

import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";

export default function Dashboard() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Dashboard | DAP Gather </title>
      </Helmet>
      <Topbar />
      <Sidebar />
      <Box component={"section"} id="dashboard">
        <Box className="dahboard-holder">
          <Typography>Dashboard</Typography>
        </Box>
      </Box>
      <Footer />
    </React.Fragment>
  );
}
