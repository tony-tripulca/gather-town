import React, { useContext } from "react";

import { Box, Chip, Container, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import "./Topbar.scss";

import Global from "../../util/global";

export default function Topbar() {
  const { apiKey, navActive, setNavActive } = useContext(Global);

  return (
    <React.Fragment>
      <Box component={"nav"} id="topbar">
        <Container maxWidth="false" className="topbar-holder">
          <Box
            component={"img"}
            src="./assets/dap-logo.png"
            alt="DAP Brands"
            className="brand-logo"
          />
          <Chip
            label={apiKey ? "Connection Ready" : "Connection Not Ready"}
            color={apiKey ? "green" : "red"}
            className="status"
          ></Chip>
          <IconButton className="btn-menu" onClick={() => setNavActive(!navActive)}>
            {navActive ? <MenuIcon /> : <MenuOpenIcon />}
          </IconButton>
        </Container>
      </Box>
    </React.Fragment>
  );
}
