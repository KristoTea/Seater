import React from "react";

import PageWrap from "./PageWrap";
import LoginForm from "../components/LoginForm";

import authHeader from "../util/auth"

export default function LoginPage() {
    React.useEffect(() => {
        fetch("http://localhost:8080/users/auth/login", {
            method: "POST",
            headers: {
                Authorization: authHeader(),
                "Content-Type": "application/json",
            },
        }).then((r) => console.log(r.json()))
    }, [])

    return (
    <PageWrap show={false}>
      <LoginForm></LoginForm>
    </PageWrap>       

    )
}