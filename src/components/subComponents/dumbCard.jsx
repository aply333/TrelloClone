import React from "react";
import Colors from "../../assets/colors"
import "../styles.css"

const DumbCard = ({data}) => {

  
    return (
      
        <div
          className="card"
          style={{
            border: `${Colors.neutral_accent} 1px solid`,
            backgroundColor: Colors.white,
            opacity: "1",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              borderBottom: `${Colors.neutral_accent} 1px`,
              marginBottom: '0px'
            }}
          >
            <h3
              style={{
                color: Colors.neutral_accent,
                marginTop: "0px",
                marginBottom: "0px"
              }}
            >
              {data.title}
            </h3>
            <p>{data.date}</p>
          </div>
          <p className="cardContent">{data.description}</p>
        </div>
      
    );
  };
  
  export default DumbCard;