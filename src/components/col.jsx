import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ITEM_TYPES } from "../constants/itemTypes";
import InnerColumn from "./subComponents/innerCol";
import PopUpMenu from "./subComponents/popUpMenu";

const Col = ({ data, columnId, newCard, setDragId, moveCard, moveColumn }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ITEM_TYPES.COLUMN },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [{ isOver }, drop] = useDrop({
    accept: ITEM_TYPES.COLUMN,
    drop: () => {moveColumn(columnId)},
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });

  const [cardMenu, setCardMenu] = useState(false);

  return (
    <div
      ref={drag}
      onMouseEnter={() => {
        setDragId([columnId, 0, "col"]);
      }}
    >
      <div
        ref={drop}
        style={{
          marginRight: "1rem",
          minWidth: "17rem",
          transition: "all ease 0.75s",
          marginLeft: isOver ? "5rem" : null,
        }}
      >
        <InnerColumn
          moveCard={moveCard}
          columnId={columnId}
          data={data}
          setDragId={setDragId}
          setCardMenu={setCardMenu}
          isDragging={isDragging}
        />

        {cardMenu === true ? (
          <PopUpMenu
            title="Add Card"
            popStateHandler={setCardMenu}
            stateHandler={newCard}
            columnId={columnId}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Col;
