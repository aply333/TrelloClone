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
      className="innerColumn"
      style={{
        backgroundColor: isOver ? Colors.neutral_accent : Colors.light,
        filter: isDragging ? "blur(1px)" : null,
        border: `1px solid ${Colors.base}`,
      }}
    >
      <div
        className="columnHeader"
        style={{
          backgroundColor: isOver ? Colors.dark_accent : Colors.base,
        }}
      >
        <h3 style={{ color: Colors.light }}>{data.title}</h3>
        <button
          className="addButton"
          style={{ transform: "scale(0.75)", marginTop: "0.025rem" }}
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
