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
    const n = rooms.length
    const x = n / 3;
    let rows = ""
    for (let i = 0; i < x; ++i)
        rows += "1fr "

    return (
        <PageWrap>
            <div style={{
                height: "100vh",
                width: "100%",
                position: "relative"
            }}>
                <div
                style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: 700,
                    height: 20,
                    background: "rgb(33, 33, 33)",
                    zIndex: 10
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
                        zIndex: 10
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
                        zIndex: 10
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
                        zIndex: 10
                    }}
                />
                <div style={{
                    height: "70%",
                    width: "80%",
                    margin: "auto",
                    marginTop: "5rem",
                    display: "grid",
                    gridTemplateRows: {rows},
                    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
                    justifyContent: "center",
                    rowGap: 10,
                    columnGap: 10
                }}>
                    {rooms.map((r) => (
                        <FloorRoom available={r.isAssigned} name={r.roomAdministrator} />
                    ))}
                </div>
            </div>
        </PageWrap>
    )
}