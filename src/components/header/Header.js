import React, { useState } from "react";

import {
  Box,
  Container,
  IconButton,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FactCheckIcon from "@mui/icons-material/FactCheck";

import "./Header.scss";

import Footer from "../footer/Footer";
import { Link } from "react-router-dom";

export default function Header() {
  const [active, setActive] = useState(false);

  return (
    <React.Fragment>
      <Box component={"nav"} id="topbar">
        <Container maxWidth="false" className="topbar-holder">
          <Box
            component={"img"}
            src="/assets/skhillz-logo-full.png"
            alt="Skhillz"
            className="skhillz-logo"
          />
          <IconButton onClick={() => setActive(!active)} className="btn-menu">
            {active ? <MenuOpenIcon /> : <MenuIcon />}
          </IconButton>
        </Container>
      </Box>
      <Box component={"nav"} id="sidebar" className={active ? "active" : ""}>
        <Container maxWidth="false" className="sidebar-holder">
          <Typography className="sidebar-label">Menu</Typography>
          <MenuList>
            <MenuItem>
              <Link to="/dashboard">
                <DashboardIcon />
                Dashboard
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/classes">
                <FactCheckIcon />
                Classes
              </Link>
            </MenuItem>
          </MenuList>
        </Container>
        <Footer />
      </Box>
    </React.Fragment>
  );
}
