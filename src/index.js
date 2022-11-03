import React from "react";
import ReactDom from "react-dom";
import "@fontsource/ubuntu";
import "@fontsource/lato";

import "./App.css";

import { createTheme, ThemeProvider} from '@mui/material/styles';
import App from "./App";

const THEME = createTheme({
  typography: {
    fontFamily: `"Lato", sans-serifs`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});
const AppWithTheme = () => (
  <ThemeProvider theme={THEME}>
    <App />
  </ThemeProvider>
);

ReactDom.render(<AppWithTheme />, document.getElementById("root"));



