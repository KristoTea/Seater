import React from "react";

import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

import PageWrap from "./PageWrap";
import Workstation from "../components/Workstation";
import UserList from "../components/UserList";
import authHeader from "../util/auth";

const users = [
  {
    name: "Lucija Aleksić",
    position: "CEO",
  },
  {
    name: "Marta Dulibić",
    position: "dosadna",
  },
  {
    name: "Fica",
    position: "Pokraj CEO",
  },
  {
    name: "Kristo",
    position: "AAAAAAAAAAAAAAAA",
  },
  {
    name: "jelena",
    position: "nezna die",
  },
  {
    name: "Lucija Aleksić",
    position: "CEO",
  },
  {
    name: "Marta Dulibić",
    position: "dosadna",
  },
  {
    name: "Fica",
    position: "Pokraj CEO",
  },
  {
    name: "Kristo",
    position: "AAAAAAAAAAAAAAAA",
  },
  {
    name: "jelena",
    position: "nezna die",
  },
];

export default function RoomPage() {
  const [room, setRoom] = React.useState();
  const id = useLocation().state.roomId;

  React.useEffect(() => {
    fetch(`http://localhost:8080/seating/rooms/detail/${id}`, {
      method: "GET",
      headers: {
        Authorization: authHeader(),
        "Content-Type": "application/json",
      },
    }).then((r) =>
      r.json().then((data) => {
        setRoom(data);
        console.log(data);
      })
    );
  }, []);

  return (
    <PageWrap>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "70%",
          alignItems: "center",
          flexGrow: 1,
        }}
      >
        <div
          style={{
            fontSize: 30,
            fontWeight: 500,
            display: "flex",
            color: "white",
            justifyContent: "center",
            width: "100%",
            marginBottom: "1rem",
          }}
        >
          {room && room.name}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "50%",
              maxHeight: "60%",
              overflow: "auto",
              padding: "20px",
              background: "#414141",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
            }}
          >
            {room &&
              room.workstations &&
              room.workstations.map(
                (workstation) =>
                  workstation.equipment && (
                    <Workstation equipment={workstation.equipment} />
                  )
              )}
            {/*<Workstation equipment={"Monitor, Keyboard, Mouse"} />*/}
            {/*<Workstation equipment={"Monitor, Mouse"} />*/}
            {/*<Workstation*/}
            {/*  equipment={"Monitor, Keyboard, Mouse, Laptop, Laptop"}*/}
            {/*/>*/}
            {/*<Workstation equipment={"Keyboard, Mouse"} />*/}
            {/*<Workstation equipment={"Monitor, Keyboard, Mouse"} />*/}
            {/*<Workstation equipment={"Monitor, Keyboard, Mouse"} />*/}
            {/*<Workstation equipment={"Monitor, Keyboard, Mouse"} />*/}
            {/*<Workstation equipment={"Monitor, Keyboard, Mouse"} />*/}
          </div>
          <div
            style={{
              width: "20%",
              maxHeight: "60%",
              padding: "20px",
              overflow: "auto",
              background: "#414141",
            }}
          >
            <UserList users={users} />
          </div>
        </div>
      </div>
    </PageWrap>
  );
}
