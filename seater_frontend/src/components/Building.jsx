import React from "react";

import Tooltip from "@mui/material/Tooltip";

import BuildingFloor from "./BuildingFloor";
import buildingImg from "../assets/building.png";

export default function Building({ floors }) {
  React.useEffect(() => {
    console.log(floors);
  });
  return (
    <>
      <div
        style={{
          height: "85%",
          width: "30%",
          marginBottom: "10vh",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 10,
              height: 100,
              background: "rgb(33, 33, 33)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 30,
              height: 20,
              background: "rgb(33, 33, 33)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 100,
              width: 80,
              height: 20,
              background: "rgb(33, 33, 33)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 150,
              width: 200,
              height: 5,
              background: "rgb(33, 33, 33)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 320,
              width: 80,
              height: 100,
              background: "rgb(33, 33, 33)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: 100,
              height: 70,
              background: "rgb(33, 33, 33)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: 20,
              height: 100,
              background: "rgb(33, 33, 33)",
            }}
          />
          <div
            style={{
              height: "100%",
              width: "100%",
              // border: "1px solid black",
              // background: "white",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {floors.map((i, name) => (
              <BuildingFloor i={name} length={floors.length} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
