import React, { useContext } from "react";

import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import "./Topbar.scss";

import Global from "../../util/global";

export default function Topbar() {
  const { navActive, setNavActive } = useContext(Global);

  return (
    <React.Fragment>
      <Box component={"nav"} id="topbar">
        <Box className="topbar-holder">
          <Box
            component={"img"}
            src="./assets/dap-logo.png"
            alt="DAP Brands"
            className="brand-logo"
          />
          <IconButton className="btn-menu" onClick={() => setNavActive(!navActive)}>
            {navActive ? <MenuIcon /> : <MenuOpenIcon />}
          </IconButton>
        </Box>
      </Box>
    </React.Fragment>
  );
}
