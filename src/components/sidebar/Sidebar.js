import React, { useContext } from "react";

import { Box, MenuItem, MenuList, Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MapIcon from "@mui/icons-material/Map";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import Grid4x4Icon from "@mui/icons-material/Grid4x4";

import "./Sidebar.scss";

import Global from "../../util/global";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const { navActive } = useContext(Global);

  return (
    <React.Fragment>
      <Box component={"aside"} id="sidebar" className={navActive ? "active" : ""}>
        <Box className="sidebar-holder">
          <Typography className="sidebar-label">Menu</Typography>
          <MenuList>
            <MenuItem>
              <Link to="/dashboard">
                <DashboardIcon />
                Dashboard
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/create-space">
                <Grid4x4Icon />
                Create Space
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/map-data">
                <MapIcon />
                Map Data
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/guest-list">
                <TheaterComedyIcon />
                Guest List
              </Link>
            </MenuItem>
          </MenuList>
        </Box>
      </Box>
    </React.Fragment>
  );
}
