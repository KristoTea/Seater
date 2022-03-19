import React from "react";

import {Button} from "@mui/material";

export default function Login() {
    return(
    <div style={{display: "flex", 
    flexDirection: "column", alignItems: "center"}}>
      <h1>Dude, Log In!</h1>
      <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <Button>Submit</Button>
        </div>
      </form>
      </div>
    )
  }