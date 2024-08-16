import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import { Box, Button, Grid, TextField, Typography } from "@mui/material";

import "./Dashboard.scss";

import Global from "../../util/global";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";

export default function Dashboard() {
  const { userState, setUserState } = useContext(Global);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setUserState((userState) => ({ ...userState, [name]: value }));
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(userState));
  }, [userState]);

  return (
    <React.Fragment>
      <Helmet>
        <title>Dashboard | DAP Gather </title>
      </Helmet>
      <Topbar />
      <Sidebar />
      <Box component={"section"} id="dashboard" className="panel">
        <Box className="dashboard-holder">
          <Typography className="section-title">User Details</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>
                Please make sure you are logged in to your gather account, and fill in the details
                below
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="API key"
                size="small"
                name="apiKey"
                value={userState.apiKey}
                onChange={(event) => handleOnChange(event)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Space ID"
                size="small"
                name="spaceId"
                value={userState.spaceId}
                onChange={(event) => handleOnChange(event)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Map name"
                size="small"
                name="mapName"
                value={userState.mapName}
                onChange={(event) => handleOnChange(event)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Generate your API key using the button below</Typography>
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
