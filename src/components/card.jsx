import React from "react";
import { useDrag } from "react-dnd";
import Colors from "../assets/colors";
import { ITEM_TYPES } from "../constants/itemTypes";
import "./styles.css";

const Card = ({data, setDragId, cardId, columnId}) => {
  const [{isDragging}, drag] = useDrag({
    item:{type: ITEM_TYPES.CARD},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  })

  return (
    
      <div
        ref={drag}
        className="card"
        style={{
          border: `${Colors.neutral_accent} 1px solid`,
          backgroundColor: Colors.white,
          opacity: isDragging ? "0.5" : "1",
          filter: isDragging ? "blur(1px)" : null
        }}
        onMouseEnter={()=>{
          setDragId([columnId, cardId, "card"])
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

export default Card;
