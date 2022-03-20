import React from "react";

import WorkstationChip from "../components/WorkstationChip";
import { Button } from "@mui/material";
import {useHistory} from "react-router-dom";

export default function Workstation({ equipment, assignee }) {

  const e = equipment[0].split(", ");
    const history = useHistory();
    if(localStorage.getItem("user") == null) {
        history.push("/login");
    }
  const isAdmin = localStorage.getItem("user").username === "admin";
  return (
    <div
      style={{
        width: "45%",
        marginBottom: 10,
        minHeight: "150px",
        background: "#4e8f7b",
        padding: "10px",
        paddingTop: "25px",
        borderRadius: 5,
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -10,
          left: "43%",
          width: "20px",
          height: "20px",
          background: "#7ab097",
          borderRadius: "20px",
          border: "5px solid #414141",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: -5,
          left: "53%",
          fontWeight: 700,
          textShadow: `-1px -1px 0 white, 
          1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white`,
        }}
      >
        assignee
      </div>
      {e !== "" && e.map((eq) => <WorkstationChip type={eq} />)}
      {isAdmin && (
        <Button
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
          }}
        >
          Assign
        </Button>
      )}
    </div>
  );
}
