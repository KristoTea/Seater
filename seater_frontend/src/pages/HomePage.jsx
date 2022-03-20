import React from "react";

import Slide from "@mui/material/Slide";

import PageWrap from "./PageWrap";
import Building from "../components/Building";
import CardContent from "@mui/material/CardContent";

import authHeader from "../util/auth";
import { CircularProgress, Paper } from "@mui/material";
import { useHistory } from "react-router-dom";

function HomePage() {
  const [floors, setFloors] = React.useState([]);
  const history = useHistory();
  React.useEffect(() => {
    // console.log(localStorage.getItem("user") == null);
    // if (localStorage.getItem("user") == null) history.push("/login");
    fetch("http://localhost:8080/seating/floors", {
      method: "GET",
      headers: {
        Authorization: authHeader(),
        "Content-Type": "application/json",
      },
    }).then((r) =>
      r.json().then((data) => {
        setFloors(data);
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
          flexGrow: 1,
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          padding: "10vh",
        }}
      >
        {floors.length > 0 ? (
          <>
            <div
              style={{
                fontSize: 30,
                fontWeight: 500,
                display: "flex",
                color: "white",
                justifyContent: "center",
              }}
            >
              Choose your desired floor and look for available seatings!
            </div>
            <Building floors={floors} />
            {/*<Slide direction="left" in>*/}
            {/*  <Paper*/}
            {/*    style={{*/}
            {/*      height: "100%",*/}
            {/*      width: "20%",*/}
            {/*      marginLeft: "2rem",*/}
            {/*    }}*/}
            {/*  >*/}
            {/*    <div*/}
            {/*      style={{*/}
            {/*        fontSize: 30,*/}
            {/*        fontWeight: 500,*/}
            {/*        display: "flex",*/}
            {/*        color: "white",*/}
            {/*        justifyContent: "center",*/}
            {/*      }}*/}
            {/*    >*/}
            {/*      Information*/}
            {/*      <div*/}
            {/*        style={{*/}
            {/*          marginRight: 10,*/}
            {/*          fontWeight: 500,*/}
            {/*          color: "black",*/}
            {/*          fontSize: 15,*/}
            {/*          display: "flex",*/}
            {/*          flexDirection: "row",*/}
            {/*        }}*/}
            {/*      ></div>*/}
            {/*    </div>*/}
            {/*  </Paper>*/}
            {/*</Slide>*/}
          </>
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress size={100} />{" "}
          </div>
        )}
      </div>
    </PageWrap>
  );
}

export default HomePage;
