import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import { Box, Button, Grid, TextField, Typography } from "@mui/material";

import "./Dashboard.scss";

import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";
import Global from "../../util/global";

export default function Dashboard() {
  const { apiKey, setApiKey } = useContext(Global);

  return (
    <React.Fragment>
      <Helmet>
        <title>Dashboard | DAP Gather </title>
      </Helmet>
      <Topbar />
      <Sidebar />
      <Box component={"section"} id="dashboard" className="panel">
        <Box className="dashboard-holder">
          <Typography className="section-title">API Key</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>
                Generate your API key, simply click on the button below and paste it on the input.
              </Typography>
              <Typography sx={{ color: "red" }}>
                Please make sure you are logged in to your gather account
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Paste your API key here"
                size="small"
                value={apiKey}
                onChange={(event) => setApiKey(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                component={Link}
                to="https://gather.town/apiKeys"
                target="_blank"
              >
                Generate API Key
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Footer />
    </React.Fragment>
  );
}
