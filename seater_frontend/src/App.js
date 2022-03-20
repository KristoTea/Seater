import React from "react";

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import Routes from "./Routes";

const theme = createTheme({
    pallette: {
        mode: 'dark',
        primary: "#0A534B"
    },
});

function App() {
  return (
    <div className="App">
        <ThemeProvider theme={theme}>
      <Routes />
        </ThemeProvider>
    </div>
  );
}


export default App;
