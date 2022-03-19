import React from 'react'

export default function Workstation({size}) {
    return (
        <div style={{
            width: {size},
            // height: {size*0.7},
            background: "#98bdb8",
            padding: "10px",
            borderRadius: 5,
            position: "relative"
        }}>
            <div style={{
                position: "absolute",
                top: -10,
                left: "39%",
                width: "20px",
                height: "20px",
                background: "#98bdb8",
                borderRadius: "20px",
                border: "5px solid white"
            }}></div>
        </div>
    )
}