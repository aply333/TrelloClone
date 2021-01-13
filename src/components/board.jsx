import React from "react";

const Board = ({children}) =>{
    return(
        <div style={{
            margin: "0 auto",
            width: "100vw",
            display: "flex",
            overflow: "auto",
            display: "flex",
            justifyContent: "center"
        }}>
            {children}
        </div>
    )
}

export default Board