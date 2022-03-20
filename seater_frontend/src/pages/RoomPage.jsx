import React from "react";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import FaceIcon from '@mui/icons-material/Face';

import PageWrap from "./PageWrap";
import Workstation from "../components/Workstation"
import UserList from "../components/UserList"

const users = [
    {
        name: "Lucija Aleksić",
        position: "CEO"
    },
    {
        name: "Marta Dulibić",
        position: "dosadna"
    },
    {
        name: "Fica",
        position: "Pokraj CEO"
    },
    {
        name: "Kristo",
        position: "AAAAAAAAAAAAAAAA"
    },
    {
        name: "jelena",
        position: "nezna die"
    },
    {
        name: "Lucija Aleksić",
        position: "CEO"
    },
    {
        name: "Marta Dulibić",
        position: "dosadna"
    },
    {
        name: "Fica",
        position: "Pokraj CEO"
    },
    {
        name: "Kristo",
        position: "AAAAAAAAAAAAAAAA"
    },
    {
        name: "jelena",
        position: "nezna die"
    },
]

export default function RoomPage() {
    return (
        <PageWrap>
            <div style={{
                display: "flex",
                flexDirection: "column",
                height: "70%",
                alignItems: "center",
                flexGrow: 1,
            }}>
                <div style={{
                    fontSize: 30,
                    fontWeight: 500,
                    display: "flex",
                    color: "white",
                    justifyContent: "center",
                    width: "100%",
                    marginBottom: "1rem"
                }}>A101</div>
                <div style={{
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <div style={{
                        width: "50%",
                        maxHeight: "60%",
                        overflow: "auto",
                        padding: "20px",
                        background: "#414141",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-evenly"
                    }}>
                        <Workstation equipment={"Monitor, Keyboard, Mouse"}/>
                        <Workstation equipment={"Monitor, Mouse"}/>
                        <Workstation equipment={"Monitor, Keyboard, Mouse, Laptop, Laptop"}/>
                        <Workstation equipment={"Keyboard, Mouse"}/>
                        <Workstation equipment={"Monitor, Keyboard, Mouse"}/>
                        <Workstation equipment={"Monitor, Keyboard, Mouse"}/>
                        <Workstation equipment={"Monitor, Keyboard, Mouse"}/>
                        <Workstation equipment={"Monitor, Keyboard, Mouse"}/>
                    </div>
                    <div style={{
                        width: "20%",
                        maxHeight: "60%",
                        padding: "20px",
                        overflow: "auto",
                        background: "#414141",
                    }}>
                        <UserList users={users}/>
                    </div>
                </div>
            </div>
        </PageWrap>
    )
}