import React from "react";
import {useHistory} from "react-router-dom";

export default function BuildingFloor({i, length}) {
    const [hovered, setHovered] = React.useState(false)
    const history = useHistory()
    return (

        <div
            onMouseEnter={() => {
                setHovered(true)
            }}
            onMouseLeave={() => {
                setHovered(false)
            }}
            style={{
                height: `${1/length*100}%`,
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: hovered ? "#627c79" : "#888888",
                cursor: hovered && "pointer"
            }}
            onClick={() => history.push("/floor")}
        >
            <p style={{
                fontWeight: 700,
                fontSize: 30,
                color: "white"
            }}>{i}</p>
        </div>
    )
}