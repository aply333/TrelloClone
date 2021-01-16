import React, { useState } from "react";
import Colors from "../../assets/colors";
import DumbCard from "../subComponents/dumbCard";
import DumbColumn from "./dumbColumn";

const BinContents = ({ removedCards, setBin, removedColumns }) => {
  const [cardCol, setCardCol] = useState("cards");

  const CardView = () => {
    return (
      <div>
        {removedCards.map((card) => (
          <DumbCard key={Math.random()} cardId={card.id} data={card} />
        ))}
      </div>
    );
  };

  const ColumnView = () => {
    return (
      <div style ={{display: "flex", overflowX: "auto"}}>
        {removedColumns.map((column) => (
          <DumbColumn key={Math.random()} data={column} />
        ))}
      </div>
    );
  };

  return (
    <div
      style={{
        width: "60%",
        minHeight: "30rem",
        maxHeight: "50rem",
        overflowY: "auto",
        backgroundColor: Colors.dark_accent,
        position: "absolute",
        left: "25%",
        borderRadius: "4px",
        boxShadow: `${Colors.neutral_accent} 20px 20px 40px`,
        transition: "all .75 ease",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "4rem",
          backgroundColor: Colors.neutral_accent,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h2
          style={{
            color: Colors.light,
            marginLeft: "2rem",
          }}
        >
          Trash Bin
        </h2>
        <div style={{ display: "flex" }}>
          <button
            className="addButton"
            style={{ width: "7rem", marginRight: "1rem" }}
            onClick={() => {
              setCardCol("cards");
            }}
          >
            Cards
          </button>
          <button
            className="addButton"
            style={{ width: "9rem" }}
            onClick={() => {
              setCardCol("column");
            }}
          >
            Columns
          </button>
        </div>
        <button
          className="addButton"
          style={{ marginRight: "2rem" }}
          onClick={() => {
            setBin(false);
          }}
        >
          x
        </button>
      </div>
      <div style={{ marginTop: "1rem" }}></div>
      {cardCol === "column" ? <ColumnView /> : <CardView />}
    </div>
  );
};

export default BinContents;
