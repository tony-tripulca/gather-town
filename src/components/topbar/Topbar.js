import React, { useContext, useEffect } from "react";

import { Box, Chip, Container, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import "./Topbar.scss";

import Global from "../../util/global";

export default function Topbar() {
  const { userState, setUserState, navActive, setNavActive } = useContext(Global);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user")) || {};

    if (!Object.values(user).includes("") || Object.keys(user).length) {
      setUserState(user);
    }
  }, []);

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
            label={userState.apiKey ? "Connection Ready" : "Connection Not Ready"}
            color={userState.apiKey ? "green" : "red"}
            className="status"
          ></Chip>
          <IconButton className="btn-menu" onClick={() => setNavActive(!navActive)}>
            {navActive ? <MenuOpenIcon /> : <MenuIcon />}
          </IconButton>
        </Container>
      </Box>
    </React.Fragment>
  );
}
