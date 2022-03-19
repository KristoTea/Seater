import React from 'react'

import {useHistory} from "react-router-dom";

export default function FloorRoom({name, status}) {
    const history = useHistory()
    return (
        <div style={{
            width: "250px",
            zIndex: 5,
            height: "250px",
            border: "1px solid black",
            marginBottom: "10px",
            background: "white",
            display: "flex",
            justifyContent: "center"
        }}>
                <div
                    onClick={() => history.push("/room")}
                    style={{
                    fontSize: 20,
                    fontWeight: 500,
                    display: "flex",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    {name}
                </div>
        </div>
    )
}