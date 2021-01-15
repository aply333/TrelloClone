import React from "react";
import { useDrop } from "react-dnd";
import { ITEM_TYPES } from "../../constants/itemTypes";
import Card from "../card";
import Colors from "../../assets/colors";
import "../styles.css";

const InnerColumn = ({
  moveCard,
  columnId,
  data,
  setDragId,
  setCardMenu,
  isDragging,
}) => {
  const [{ isOver }, drop] = useDrop({
    accept: ITEM_TYPES.CARD,
    drop: () => {
      moveCard(columnId);
    },
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });

  return (
    <div
      ref={drop}
      style={{
        backgroundColor: isOver ? Colors.neutral_accent : Colors.light,
        filter: isDragging ? "blur(1px)" : null,
        minWidth: "15rem",
        width: "40%",
        maxWidth: "35rem",
        minHeight: "15rem",
        borderRadius: "4px",
        margin: "0 auto",
        marginLeft: "1rem",
        border: `1px solid ${Colors.base}`,
      }}
    >
      <div
        style={{
          backgroundColor: isOver ? Colors.dark_accent : Colors.base,
          display: "flex",
          justifyContent: "space-around",
          height: "3rem",
          marginBottom: ".5rem",
        }}
      >
        <h3
          style={{
            fontSize: "1.75rem",
            color: Colors.light,
            textDecoration: "underline",
            fontWeight: "450",
            marginTop: "0",
            padding: ".5rem",
          }}
        >
          {data.title}
        </h3>
        <button
          className="colMenu"
          style={{ width: "2rem", height: "2rem" }}
          onClick={(e) => {
            e.preventDefault();
            setCardMenu(true);
          }}
        >
          +
        </button>
      </div>
      {data.cards.map((card) => (
        <Card
          key={card.id}
          cardId={card.id}
          data={card}
          setDragId={setDragId}
          columnId={columnId}
        />
      ))}
    </div>
  );
};

export default InnerColumn;
