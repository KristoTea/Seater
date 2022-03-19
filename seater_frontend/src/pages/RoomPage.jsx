import React from "react";

import PageWrap from "./PageWrap";
import Workstation from "../components/Workstation"

export default function RoomPage() {
    return (

        <PageWrap>
            <div style={{
                display: "flex",
                height: "100%",
                flexGrow: 1
            }}>
                <div style={{
                    margin: "auto",
                    width: "50%",
                    height: "700px",
                    maxHeight: "70%",
                    overflow: "auto",
                    padding: "20px",
                    border: "1px solid black"
                }}>
                    <Workstation size={100}/>
                </div>
            </div>
        </PageWrap>
    )
}