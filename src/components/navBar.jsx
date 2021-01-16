import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Colors from "../assets/colors";
import "./styles.css";

const NavBar = ({ newCol }) => {
  const [popMenu, setPopMenu] = useState(false);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    newCol(data.new_title);
    setPopMenu(false);
  };

  const ColMenu = () => {
    return (
      <div
        className="inputPop"
        style={{
          backgroundColor: Colors.base,
        }}
      >
        <h1>Create New Column</h1>
        <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
          <input
            style={{ width: "95%", height: "1.5rem" }}
            type="text"
            placeholder="Column Title"
            name="new_title"
            ref={register}
          />
          <input type="submit" />
        </form>
        <div style={{ display: "flex", flexFlow: "column" }}>
          <button
            onClick={(e) => {
              e.preventDefault();
              setPopMenu(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        backgroundColor: Colors.base,
        display: "flex",
        width: "100%",
        marginBottom: "2rem",
        justifyContent: "space-between",
        height: "4rem",
      }}
    >
      <div
        style={{
          marginLeft: "1rem",
        }}
      >
        <h1
          style={{
            color: Colors.light,
          }}
        >
          Trello Clone
        </h1>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginRight: "1rem",
        }}
      >
        <button
          className="addButton"
          onClick={(e) => {
            e.preventDefault();
            setPopMenu(true);
          }}
        >
          +
        </button>
        {popMenu === true ? <ColMenu /> : null}
      </div>
    </div>
  );
};

export default NavBar;
