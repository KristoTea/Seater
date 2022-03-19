import React from "react";
import PageWrap from "./PageWrap";
import Building from "../components/Building";

function HomePage() {
    return (
        <PageWrap>
            <div style={{
                display: "flex",
                flexGrow: 1,
                height: "100%",
                flexDirection: "column",
                justifyContent: "end",
                alignItems: "center",
                padding: "10vh",
            }}>
                <Building floors={[1,2,3,4,5,6,7,8,9,10]}/>
            </div>
        </PageWrap>
    )
}

export default HomePage