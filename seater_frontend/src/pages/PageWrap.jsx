import React from "react";
import {useHistory} from "react-router-dom";

import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";

function PageWrap({children, show}) {
const history = useHistory();
    return (
        <div style={{
            width: "100%",
            height: "100vh",
            overflow: "hidden",
            background: "rgb(33, 33, 33)"
        }}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{
                    background: "#0A534B" //#278878
                }}>
                    <Toolbar>
                        <Typography variant="h4" style={{fontWeight: 800, fontFamily: "Poppins"}} component="div" sx={{ flexGrow: 1 }}>
                            Seater
                        </Typography>
                        {show == false || show == undefined && <Button color="inherit" onClick={() => history.push("/login")}>Log in</Button>}
                    </Toolbar>
                </AppBar>
            </Box>
            {children}
        </div>
    )
}

export default PageWrap;