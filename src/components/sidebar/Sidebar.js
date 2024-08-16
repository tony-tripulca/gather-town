import React, { useContext } from "react";

import { Box, Typography } from "@mui/material";

import "./Sidebar.scss";

import Global from "../../util/global";

export default function Sidebar() {
  const { navActive } = useContext(Global);

  return (
    <React.Fragment>
      <Box component={"aside"} id="sidebar" className={navActive ? "active" : ""}>
        <Box className="sidebar-holder">
          <Typography>Sidebar</Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
}
