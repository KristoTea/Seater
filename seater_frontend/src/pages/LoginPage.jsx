import React from "react";
import { useHistory } from "react-router-dom";

import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

import PageWrap from "./PageWrap";

import authHeader from "../util/auth";

const api = "http://localhost:8080/";

export default function LoginPage() {
  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();

  const history = useHistory();

  function submit() {
    const user = {
      username: username,
      password: password,
    };
    console.log(username);
    console.log(password);

    fetch(api + "users/auth/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        Authorization: authHeader(),
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP status code: " + response.status);
        } else {
          return response.json();
        }
      })
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data));
      });

    if (username == "admin") history.push("/admin");
    history.push("/");
  }

  return (
    <PageWrap show={false}>
      <div
        style={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
          justifyContent: "space-evenly",
          height: "60%",
          margin: "auto",
          marginTop: "2rem",
          alignItems: "center",
          background: "#0A534B",
          borderRadius: 5,
          width: "30%",
        }}
      >
        <h1 style={{ color: "white" }}>Log In</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <TextField
            label="Username"
            variant="filled"
            fullWidth
            style={{ width: "70%", marginBottom: 10 }}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            variant="filled"
            fullWidth
            style={{ width: "70%", marginBottom: 10 }}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="outlined" onClick={() => submit()}>
            Log in
          </Button>
        </div>
      </div>
    </PageWrap>
  );
}
