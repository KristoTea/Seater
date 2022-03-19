import React from "react";

import PageWrap from "./PageWrap";
import FloorRoom from "../components/FloorRoom"

const rooms = [
    {
        isAssigned: false,
        roomAdministrator: "CEO's office",
    },
    {
        isAssigned: true,
        roomAdministrator: "A1 team",
    },
    {
        isAssigned: true,
        roomAdministrator: "Lucija Aleksic",
    },
    {
        isAssigned: false,
        roomAdministrator: "B3",
    },
    {
        isAssigned: true,
        roomAdministrator: "D723",
    },
    {
        isAssigned: false,
        roomAdministrator: "Mama",
    },
    {
        isAssigned: false,
        roomAdministrator: "CEO's office",
    },
    {
        isAssigned: true,
        roomAdministrator: "A1 team",
    },
    {
        isAssigned: true,
        roomAdministrator: "Lucija Aleksic",
    },
    {
        isAssigned: false,
        roomAdministrator: "B3",
    },
    {
        isAssigned: true,
        roomAdministrator: "D723",
    },
    {
        isAssigned: false,
        roomAdministrator: "Mama",
    },
]

export default function FloorPage() {
    return (
        <PageWrap>
            <div style={{
                fontSize: 40,
                fontWeight: 500,
                display: "flex",
                justifyContent: "center",

            }}>
                2nd floor
            </div>
            <div style={{
                margin: "auto",
                width: "50%",
                maxHeight: "70%",
                overflow: "auto",
                padding: "20px",
                background: "#A0D8D3",
                borderRadius: 20,
                position: "relative"
            }}>
                <div style={{
                    borderRadius: 500,
                    zIndex: 0,
                    position: "absolute",
                    top: -150,
                    left: -100,
                    width: 500,
                    height: 500,
                    background: "#98bdb8",
                }} />
                <div style={{
                    maxHeight: "100%",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-evenly",
                }}>
                    {rooms.map(r => (
                        <FloorRoom name={r.roomAdministrator} />
                    ))}
                </div>
            </div>
        </PageWrap>
    )
}