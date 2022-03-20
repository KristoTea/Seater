import React from "react";
import { useHistory } from "react-router-dom";

import logo from "../assets/logo.png";

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

function PageWrap({ children, show }) {
  const history = useHistory();
  const user = localStorage.getItem("user");
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        background: "rgb(33, 33, 33)",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          style={{
            background: "#0A534B", //#278878
          }}
        >
          <Toolbar>
            <img src={logo} alt="logo" height={40} width={40} />
            <Typography
              variant="h4"
              onClick={() => history.push("/")}
              style={{
                fontWeight: 800,
                fontFamily: "Poppins",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Seater
            </Typography>
            {show === false ||
              (show === undefined &&
                (user === null ? (
                  <Button
                    color="inherit"
                    onClick={() => {history.push("/login");}}
                  >
                    Log in
                  </Button>
                ) : (
                  <Button
                    color="inherit"
                    onClick={() => {localStorage.removeItem("user"); history.push("/login"); window.location.reload();}}
                  >
                    Log out
                  </Button>
                )))}
          </Toolbar>
        </AppBar>
      </Box>
      {children}
    </div>
  );
}

export default PageWrap;
