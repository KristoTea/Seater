import React from "react";
import {useHistory} from "react-router-dom";

import {Button} from "@mui/material";
import TextField from '@mui/material/TextField';

import PageWrap from "./PageWrap";
import LoginForm from "../components/LoginForm";

import authHeader from "../util/auth"

const api = "http://localhost:8080/"

export default function LoginPage() {
    const [username, setUsername] = React.useState()
    const [password, setPassword] = React.useState()

    const history = useHistory()

    function submit() {
        const user = {
            username: username,
            password: password
        }
        console.log(username)
        console.log(password)

        fetch(api + "users/auth/login", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                Authorization: authHeader(),
                "Content-Type": "application/json",
            },
        }).then((r) => r.json()
            .then(data => localStorage.setItem("user", JSON.stringify(data))))

        if (username == "admin") history.push("/admin")
    }

    return (
    <PageWrap show={false}>
        <div style={{display: "flex",
            flexDirection: "column",
            alignItems: "center"}}
        >
            <h1>Dude, Log In!</h1>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <TextField label="Username" variant="outlined" onChange={(e) => setUsername(e.target.value)}/>
                <TextField label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)}/>
                <Button onClick={() => submit()}>Submit</Button>
            </div>
        </div>
    </PageWrap>       

    )
}