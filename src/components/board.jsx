import React from "react";

const Board = ({children}) =>{
    return(
        <div style={{
            margin: "0 auto",
            width:  "auto",
            display: "flex",
            overflow: "auto",
            paddingLeft: "2rem"
        }}>
            {children}
        </div>
    )
}

export default Board