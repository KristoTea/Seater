import React from "react";

import {Button} from "@mui/material";

import PageWrap from "./PageWrap";
import UserList from "../components/UserList"

import authHeader from "../util/auth"

const api = "http://localhost:8080"

export default function AdminPage() {
    const [users, setUsers] = React.useState([])

    React.useEffect(() => {
        fetch(api + "/users", {
            method: "GET",
            headers: {
                Authorization: authHeader(),
                "Content-Type": "application/json",
            },
        }).then(r => r.json().then(data => setUsers(data)))
        // users = users.filter(user => user.username != "admin")
        // setUsers(users)
    }, [])

    function deleteUser(id) {
        fetch(api + "/users", {
            method: "DELETE",
            headers: {
                Authorization: authHeader(),
                "Content-Type": "application/json",
            },
        }).then(r => r.json().then(data => console.log(data)))
        setUsers(users.filter(user => user.id !== id))
    }

    return (
    <PageWrap show={false}>
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <div style={{
                width: "20%",
                maxHeight: "60%",
                padding: "20px",
                overflow: "auto",
                background: "#414141",
            }}>
                <UserList deleteUser={deleteUser} users={users} deleteUsers/>
                <Button>Add</Button>
            </div>
        </div>
    </PageWrap>
    )
}