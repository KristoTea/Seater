import React from 'react'

import WorkstationChip from '../components/WorkstationChip'

export default function Workstation({equipment}) {
    // console.log(equipment)
    const e = equipment.split(", ");
    return (
        <div style={{
            width: "45%",
            marginBottom: 10,
            minHeight: "150px",
            paddingTop: "2rem",
            background: "#98bdb8",
            padding: "10px",
            borderRadius: 5,
            position: "relative"
        }}>
            <div style={{
                position: "absolute",
                top: -10,
                left: "43%",
                width: "20px",
                height: "20px",
                background: "#98bdb8",
                borderRadius: "20px",
                border: "5px solid #414141"
            }} />
            {e.map((eq) => (<WorkstationChip type={eq}/>))}
        </div>
    )
}