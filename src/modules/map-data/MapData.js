import React, { useCallback, useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import { Box, Grid, Paper, Typography } from "@mui/material";

import "./MapData.scss";

import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";
import Global from "../../util/global";
import GatherTownService from "../../services/GatherTownService";

export default function MapData() {
  const { userState } = useContext(Global);

  const [mapData, setMapData] = useState([]);

  const handleGetMaps = useCallback(() => {
    console.log(userState);
    if (!Object.values(userState).includes("")) {
      GatherTownService.mapData({
        apiKey: userState.apiKey,
        spaceId: userState.spaceId,
        mapName: userState.mapName,
      })
        .then((response) => {
          setMapData(response.data);
        })
        .catch((error) => console.error(error));
    }
  }, [userState]);

  useEffect(() => {
    handleGetMaps();
  }, [handleGetMaps]);

  return (
    <React.Fragment>
      <Helmet>
        <title>Map Data | DAP Gather </title>
      </Helmet>
      <Topbar />
      <Sidebar />
      <Box component={"section"} id="map-data" className="panel">
        <Box className="map-data-holder">
          <Typography className="section-title">Map Data</Typography>
          <Grid container spacing={2}>
            {mapData?.map((item, i) => (
              <Grid item xs={12} key={i}>
                <Paper elevation={4} className="card">
                  <Box className="card-image">
                    <Box component={"img"} src={item.backgroundImagePath} alt="background" />
                  </Box>
                  <Box className="card-content">
                    <Typography className="title">Type</Typography>
                    <Typography>{item.id}</Typography>
                    <Typography className="title">Areas</Typography>
                    <Typography>
                      {item.areas && Object.keys(item.areas).map((item) => `${item}, `)}
                    </Typography>
                    <Typography className="title">Nooks</Typography>
                    <Typography>
                      {item.nooks && Object.keys(item.nooks)?.map((item) => `${item}, `)}
                    </Typography>
                    <Typography className="title">Updated At</Typography>
                    <Typography>{item.updatedAt}</Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Footer />
    </React.Fragment>
  );
}
