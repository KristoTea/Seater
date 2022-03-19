import React from "react";

import Slide from '@mui/material/Slide';

import PageWrap from "./PageWrap";
import Building from "../components/Building";

function HomePage() {
    return (
        <PageWrap>
            <div style={{
                display: "flex",
                flexGrow: 1,
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                padding: "10vh",
            }}>
                <Building floors={[1,2,3,4,5,6,7]}/>
                <Slide direction="left" in>
                    <div style={{
                        height: "50%",
                        width: "20%",
                        borderRadius: 10,
                        background: "#A0D8D3",
                        marginLeft: "2rem"
                    }}>
                        <div style={{
                            fontSize: 30,
                            fontWeight: 500,
                            display: "flex",
                            color: "white",
                            justifyContent: "center"
                        }}>
                            Information
                        </div>
                    </div>
                </Slide>
            </div>
        </PageWrap>
    )
}

export default HomePage