import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider, createTheme } from "@mui/material";
import { grey, indigo, red } from "@mui/material/colors";

import "@fontsource-variable/outfit";

import "./App.scss";

import Global from "./util/global";
import AppRouter from "./AppRouter";

export default function App() {
  const [snackbar, setSnackbar] = useState({
    x: "right",
    y: "top",
    open: false,
    duration: 3000,
    text: "",
    severity: "succes",
  });

  const [apiKey, setApiKey] = useState("");
  const [navActive, setNavActive] = useState(true);

  const globals = {
    snackbar,
    setSnackbar,
    apiKey,
    setApiKey,
    navActive,
    setNavActive,
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={customTheme()}>
        <Global.Provider value={globals}>
          <AppRouter />
        </Global.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

function customTheme() {
  return createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1400,
      },
    },
    typography: {
      fontFamily: `"Outfit Variable", sans-serif`,
    },
    palette: {
      primary: {
        light: indigo[700],
        main: indigo[900],
        dark: indigo[800],
        contrastText: "#FFF",
      },
      secondary: {
        light: red[700],
        main: red[900],
        dark: red[800],
        contrastText: "#FFF",
      },
      white: {
        light: grey[50],
        main: grey[100],
        dark: grey[200],
        contrastText: "#000",
      },
      black: {
        light: grey[700],
        main: grey[900],
        dark: grey[800],
        contrastText: "#FFF",
      },
    },
  });
}
