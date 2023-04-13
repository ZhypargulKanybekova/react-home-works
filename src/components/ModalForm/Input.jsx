import React from "react";

export const Input = (props) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.children}</label>
      <input
        style={{
          width: "550px",
          height: "50px",
          marginTop: "40px",
          borderRadius: "5px",
          borderColor: "white",
        }}
        placeholder={props.placeholder}
        id={props.id}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      ></input>
    </div>
  );
};
