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
      style={{ backgroundColor: Colors.base, height: "20rem" }}
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
          type="text"
          placeholder="Card Title"
          name="card_title"
          ref={register}
        />
        <textarea
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

export default PopUpMenu