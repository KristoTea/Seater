import React from "react";

import BuildingFloor from "./BuildingFloor";
import buildingImg from "../assets/building.png"

export default function Building({floors}) {
    React.useEffect(() => {
        console.log(floors)
        floors.map(i => {
            console.log(i)
            console.log(floors.length)
            console.log(1/floors.length)
        })
    })
    return (
        <div style={{
            height: "85%",
            width: "30%",
        }}>
            <div style={{
                    height: "100%",
                    width: "100%",
                    position: "relative"
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: 10,
                        height: 100,
                        background: "#FFFFFF"
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: 30,
                        height: 20,
                        background: "#FFFFFF"
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 100,
                        width: 80,
                        height: 20,
                        background: "#FFFFFF"
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 150,
                        width: 200,
                        height: 5,
                        background: "#FFFFFF"
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 250,
                        width: 120,
                        height: 100,
                        background: "#FFFFFF"
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: 100,
                        height: 70,
                        background: "#FFFFFF"
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: 20,
                        height: 100,
                        background: "#FFFFFF"
                    }}
                />
                <div style={{
                    height: "100%",
                    width: "100%",
                    // border: "1px solid black",
                    // background: "white",
                    display: "flex",
                    flexDirection: "column"
                }}>
                    {floors.map(i => (
                        <BuildingFloor i={i} length={floors.length} />
                    ))}
                </div>
            </div>
        </div>
        // <div style={{
        //     height: "85%",
        //     width: "30%",
        // }}>
        //     <img src={buildingImg}  alt="building"/>
        //     {floors.map(i => (
        //         <BuildingFloor i={i} length={floors.length} />
        //     ))}
        // </div>
    )
}