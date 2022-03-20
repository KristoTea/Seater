import React from "react";

import Slide from "@mui/material/Slide";

import PageWrap from "./PageWrap";
import Building from "../components/Building";
import CardContent from "@mui/material/CardContent";

import authHeader from "../util/auth";
import { CircularProgress } from "@mui/material";

function HomePage() {
  const [floors, setFloors] = React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost:8080/seating/floors", {
      method: "GET",
      headers: {
        Authorization: authHeader(),
        "Content-Type": "application/json",
      },
    }).then((r) =>
      r.json().then((data) => {
        setFloors(data);
      })
    );
  }, []);
  return (
    <PageWrap>
      <div
        style={{
          display: "flex",
          flexGrow: 1,
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          padding: "10vh",
        }}
      >
        {floors.length > 0 ? (
          <>
            <Building floors={floors} />
            <Slide direction="left" in>
              <div
                style={{
                  height: "50%",
                  width: "20%",
                  borderRadius: 10,
                  background: "#627c79",
                  marginLeft: "2rem",
                }}
              >
                <div
                  style={{
                    fontSize: 30,
                    fontWeight: 500,
                    display: "flex",
                    color: "white",
                    justifyContent: "center",
                  }}
                >
                  Information
                  <div
                    style={{
                      marginRight: 10,
                      fontWeight: 500,
                      color: "black",
                      fontSize: 15,
                      display: "flex",
                      flexDirection: "row",
                    }}
                  ></div>
                </div>
              </div>
            </Slide>
          </>
        ) : (
          <CircularProgress />
        )}
      </div>
    </PageWrap>
  );
}

export default HomePage;
