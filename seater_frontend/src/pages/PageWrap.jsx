import React from "react";

function PageWrap({children}) {
    return (
        <div style={{
            width: "100%",
            height: "100vh",
            overflow: "hidden"
        }}>
            {children}
        </div>
    )
}

export default PageWrap;