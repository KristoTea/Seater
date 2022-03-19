import React from "react";

import PageWrap from "./PageWrap";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
    return (
    <PageWrap show={false}>
      <LoginForm></LoginForm>
    </PageWrap>       

    )
}