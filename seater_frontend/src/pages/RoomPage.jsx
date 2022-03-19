import React from "react";

import PageWrap from "./PageWrap";
import Workstation from "../components/Workstation"

export default function RoomPage() {
    return (
        <PageWrap>
            <div style={{
                display: "flex",
                height: "100%",
                flexGrow: 1,
            }}>
                <div style={{
                    margin: "auto",
                    width: "50%",
                    height: "700px",
                    maxHeight: "70%",
                    overflow: "auto",
                    padding: "20px",
                    border: "1px solid black",
                    background: "#414141",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-evenly"
                }}>
                    <Workstation equipment={"Monitor, Keyboard, Mouse"}/>
                    <Workstation equipment={"Monitor, Mouse"}/>
                    <Workstation equipment={"Monitor, Keyboard, Mouse, Laptop, Laptop"}/>
                    <Workstation equipment={"Keyboard, Mouse"}/>
                    <Workstation equipment={"Monitor, Keyboard, Mouse"}/>
                </div>
            </div>
        </PageWrap>
    )
}