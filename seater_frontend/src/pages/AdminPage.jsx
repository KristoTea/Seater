import React from "react";

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
        console.log(users)
    }, [])

    return (
    <PageWrap show={false}>
            <div style={{
                width: "20%",
                maxHeight: "60%",
                padding: "20px",
                overflow: "auto",
                background: "#414141",
            }}>
                <UserList users={users}/>
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
    </PageWrap>
    )
}