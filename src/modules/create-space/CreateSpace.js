import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import { Box, Button, Typography } from "@mui/material";

import "./CreateSpace.scss";

import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

export default function CreateSpace() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Create Space | DAP Gather </title>
      </Helmet>
      <Topbar />
      <Sidebar />
      <Box component={"section"} id="create-space" className="panel">
        <Box className="create-space-holder">
          <Typography className="section-title">Create Space</Typography>
          <Typography>
            It&apos;s recommended to create your space on your account for now.
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to="https://app.gather.town/"
            target="_blank"
          >
            Create Space
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
}
