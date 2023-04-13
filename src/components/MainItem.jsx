import React from "react";
import "./Content.css";
import { Button } from "./Button";
// import { Array } from './Array'
export const MainItem = ({
  title,
  rating,
  img,
  openModalHandler,
  onDelete,
  id,
}) => {
  const editHandler = () => {
    openModalHandler();
    console.log("sdsdsds");
  };

  return (
    <div className="container">
      <ul id="movieList">
        <li class="movie-element">
          <div class="movie-element__image">
            <img src={img} id="imageMovie" />
          </div>
          <div class="movie-element__info">
            <h2 id="nameOfMovie">{title} </h2>
            <p id="stars"> {rating}/5 stars</p>
            <Button
              color={"rgba(157, 43, 186, 0.906)"}
              title={"DELETE"}
              onClick={() => onDelete(id)}
            />
            <Button onClick={editHandler} color={"#9d2bbae7"} title={"EDIT"} />
          </div>
        </li>
      </ul>
    </div>
  );
};
