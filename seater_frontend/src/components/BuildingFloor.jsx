import React from "react";
import { useHistory } from "react-router-dom";

export default function BuildingFloor({ id, name, length }) {
  const [hovered, setHovered] = React.useState(false);
  const history = useHistory();
  console.log(name);
  return (
    <div
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      style={{
        height: `${(1 / length) * 100}%`,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: hovered ? "#627c79" : "#414141",
        cursor: hovered && "pointer",
      }}
      onClick={() =>
        history.push({
          pathname: "/floor",
          state: {
            floorId: id,
          },
        })
      }
    >
      <p
        style={{
          fontWeight: 700,
          fontSize: 30,
          color: "white",
        }}
      >
        {name}
      </p>
    </div>
  );
}
