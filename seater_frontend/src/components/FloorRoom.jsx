import React from 'react'

export default function FloorRoom({name, status}) {
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
                <div style={{
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