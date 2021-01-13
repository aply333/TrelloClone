import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { useForm } from "react-hook-form";
import Colors from "../assets/colors";
import { ITEM_TYPES } from "../constants/itemTypes";
import Card from "./card";

const Col = ({ children, data, columnId, newCard, setDragId, dragId, moveCard }) => {
  const [{ isOver }, drop] = useDrop({
    accept: ITEM_TYPES.CARD,
    drop: () =>{moveCard(dragId, columnId)},
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const [cardMenu, setCardMenu] = useState(false);
  const NewCardPopUp = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
      newCard(columnId, data);
      setCardMenu(false);
    };
    return (
      <div
        className="inputPop"
        style={{ backgroundColor: Colors.base, height: "20rem" }}
      >
        <h1>Add a new card</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: "flex",
            flexFlow: "column",
            justifyContent: "center",
          }}
        >
          <input
            type="text"
            placeholder="card name"
            name="card_title"
            ref={register}
          />
          <textarea
            placeholder="card details"
            name="description"
            ref={register}
            rows="10"
          />
          <input type="submit" />
        </form>
        <button
          onClick={(e) => {
            e.preventDefault();
            setCardMenu(false);
          }}
        >
          Cancel
        </button>
      </div>
    );
  };

  return (
    <div
      onMouseEnter={()=>{console.log('COL',columnId)}}
      ref={drop}
      style={{
        backgroundColor: isOver ? Colors.neutral_accent : Colors.light,
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
            console.log(columnId);
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
      {cardMenu === true ? <NewCardPopUp /> : null}
    </div>
  );
};

export default Col;
