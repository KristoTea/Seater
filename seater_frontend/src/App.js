import React from "react";

import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

import Routes from "./Routes";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Routes />
      </ThemeProvider>
    </div>
  );
}

export default App;
