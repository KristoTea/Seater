import React from "react";

import { useLocation } from "react-router-dom";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

import PageWrap from "./PageWrap";
import FloorRoom from "../components/FloorRoom";
import authHeader from "../util/auth";
import { CircularProgress } from "@mui/material";

export default function FloorPage() {
  const floorId = useLocation().state.floorId;

  const [rooms, setRooms] = React.useState([]);
  React.useEffect(() => {
    fetch(`http://localhost:8080/seating/rooms/${floorId}`, {
      method: "GET",
      headers: {
        Authorization: authHeader(),
        "Content-Type": "application/json",
      },
    }).then((r) =>
      r.json().then((data) => {
        setRooms(data);
      })
    );
  }, []);

  const n = rooms.length;
  const x = n / 3;
  let rows = "";
  for (let i = 0; i < x; ++i) rows += "1fr ";

  return (
    <PageWrap>
      {rooms.length > 0 ? (
        <>
          <div
            style={{
              height: "100vh",
              width: "100%",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: 700,
                height: 20,
                background: "rgb(33, 33, 33)",
                zIndex: 10,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: 200,
                height: 100,
                background: "rgb(33, 33, 33)",
                zIndex: 10,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: 200,
                height: 30,
                background: "rgb(33, 33, 33)",
                zIndex: 10,
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: 150,
                height: 100,
                background: "red",
                zIndex: 10,
              }}
            />
            <div
              style={{
                height: "70%",
                width: "80%",
                margin: "auto",
                marginTop: "5rem",
                display: "grid",
                gridTemplateRows: { rows },
                gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
                justifyContent: "center",
                rowGap: 10,
                columnGap: 10,
              }}
            >
              {rooms.map((r) => (
                <FloorRoom id={r.id} available={r.assigned} name={r.name} />
              ))}
            </div>
            <Accordion
              style={{
                position: "absolute",
                right: 0,
                top: -70,
                zIndex: 10,
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  style={{
                    fontSize: 20,
                    fontWeight: 500,
                    fontFamily: "Poppins",
                  }}
                >
                  LEGEND
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List sx={{ width: "100%" }}>
                  <ListItem>
                    <ListItemAvatar>
                      <div
                        style={{
                          width: 20,
                          height: 20,
                          background: "rgb(44,161,73)",
                          borderRadius: 20,
                        }}
                      />
                    </ListItemAvatar>
                    <ListItemText primary="Available" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <div
                        style={{
                          width: 20,
                          height: 20,
                          background: "rgb(152,56,56)",
                          borderRadius: 20,
                        }}
                      />
                    </ListItemAvatar>
                    <ListItemText primary="Not available" />
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
          </div>
          <div
            style={{
              width: 20,
              height: 20,
              background: "rgb(152,56,56)",
            }}
          />
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
    </PageWrap>
  );
}
