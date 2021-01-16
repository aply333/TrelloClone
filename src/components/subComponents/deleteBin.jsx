import React from "react";
import { useDrop } from "react-dnd";
import Colors from "../../assets/colors";
import { ITEM_TYPES } from "../../constants/itemTypes";

const DeleteBin = ({ dragId, handleRemove, setBin }) => {
  const [{ isOver }, drop] = useDrop({
    accept: [ITEM_TYPES.CARD, ITEM_TYPES.COLUMN],
    drop: () => {
      handleRemove(dragId);
    },
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });
  
  return (
    <div
      ref={drop}
      style={{
        width: "20rem",
        height: "20rem",
        border: isOver ? `1px dashed red` : `1px dashed ${Colors.light_accent}`,
        borderRadius: "4px",
        position: "absolute",
        bottom: "1rem",
        right: "1rem",
      }}
      onClick={() => {
        setBin(true)
      }}
    >
      <p
        style={{
          color: isOver ? "red" : "grey",
          textAlign: "center",
          marginTop: "5rem",
          fontSize: "3rem",
          fontWeight: "100",
        }}
      >
        Trash Bin
      </p>
      <p style={{
          color: isOver ? "red" : "grey",
          marginTop: "0",
          textAlign: "center",
          fontSize: "1.25rem",
          fontWeight: "100"
      }}>Click To View Contents</p>
    </div>
  );
};

export default DeleteBin;
