import React, { useContext } from "react";
import { Helmet } from "react-helmet";

import { Box, Typography } from "@mui/material";

import "./MapData.scss";

import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";
import Global from "../../util/global";

export default function MapData() {
  const { apiKey, setApiKey } = useContext(Global);
  console.log(apiKey, setApiKey);

  return (
    <React.Fragment>
      <Helmet>
        <title>Map Data | DAP Gather </title>
      </Helmet>
      <Topbar />
      <Sidebar />
      <Box component={"section"} id="dashboard" className="panel">
        <Box className="dashboard-holder">
          <Typography className="section-title">Map Data</Typography>
        </Box>
      </Box>
      <Footer />
    </React.Fragment>
  );
}
