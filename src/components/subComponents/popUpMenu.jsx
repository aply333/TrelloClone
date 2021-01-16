import React from "react";
import { useForm } from "react-hook-form";
import Colors from "../../assets/colors";

const PopUpMenu = ({ title, stateHandler, popStateHandler, columnId }) => {
  const { register, handleSubmit } = useForm();
  const submitHandler = (data) => {
    stateHandler(columnId, data);
    popStateHandler(false);
  };
  return (
    <div
      className="inputPop"
      style={{ backgroundColor: Colors.base, height: "24rem" }}
    >
      <h1>{title}</h1>
      <form
        onSubmit={handleSubmit(submitHandler)}
        style={{
          display: "flex",
          flexFlow: "column",
          justifyContent: "center",
        }}
      >
        <input
          style={{ margin: "0 auto",width: "95%", height: "1.5rem", }}
          type="text"
          placeholder="Card Title"
          name="card_title"
          ref={register}
        />
        <textarea
          style={{ margin: "0 auto",width: "95%", resize: "none" }}
          rows= "15"
          placeholder="card details"
          name="description"
          ref={register}
        />
        <input type="submit" />
      </form>
      <button
        onClick={(e) => {
          e.preventDefault();
          popStateHandler(false);
        }}
      >
        Cancel
      </button>
    </div>
  );
};

export default PopUpMenu;
