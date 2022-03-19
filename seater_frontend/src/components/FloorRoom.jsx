import React from 'react'

import {useHistory} from "react-router-dom";

export default function FloorRoom({name, available}) {
    const history = useHistory()
    const [hovered, setHovered] = React.useState(false)
    function getColour() {
        if (available && !hovered) return "rgb(152,56,56)"
        if (!available && !hovered) return  "rgb(44,161,73)"
        if (available && hovered) return "rgb(157,90,90)"
        if (!available && hovered)  return "rgb(80,164,101)"
    }
    return (
        <div style={{
            zIndex: 5,
            background: getColour(),
            display: "flex",
            color: "white",
            justifyContent: "center",
            cursor: hovered && "pointer"
        }}>
            
                <div
                    onMouseEnter={() => {
                        setHovered(true)
                    }}
                    onMouseLeave={() => {
                        setHovered(false)
                    }}
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