import React from "react";

export const Button = ({ onClick,title, ...rest }) => {
  return (
    <button {...rest} className="cardsButton" onClick={onClick} >
      {title}
    </button>
  );
};
