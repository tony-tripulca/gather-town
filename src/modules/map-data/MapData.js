import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";

import { Box, Button, Grid, TextField, Typography } from "@mui/material";

import "./MapData.scss";

import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";
import Global from "../../util/global";
import GatherTownService from "../../services/GatherTownService";

export default function MapData() {
  const { apiKey } = useContext(Global);

  const [mapData, setMapData] = useState({
    spaceId: "",
    mapName: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setMapData((mapData) => ({ ...mapData, [name]: value }));
  };

  const handleGetMaps = () => {
    GatherTownService.mapData({
      spaceId: mapData.spaceId,
      mapName: mapData.mapName,
      apiKey: apiKey,
    })
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  };

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
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Space ID"
                size="small"
                name="spaceId"
                value={mapData.spaceId}
                onChange={(event) => handleOnChange(event)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Map name"
                size="small"
                name="mapName"
                value={mapData.mapName}
                onChange={(event) => handleOnChange(event)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" onClick={() => handleGetMaps()}>
                Get Map Data
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Footer />
    </React.Fragment>
  );
}
