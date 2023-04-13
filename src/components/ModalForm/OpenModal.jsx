import React from "react";
import { Input } from "./Input";
import "./Modal.css";
import { useState } from "react";
export const OpenModal = ({ openModalHandler, addMovieHandler }) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputRating, setInputRating] = useState("");
  const [inputUrl, setInputUrl] = useState("");

  function getMovieTitleValue(e) {
    setInputTitle(e.target.value);
  }

  function getMovieRaitingValue(e) {
    setInputRating(e.target.value);
  }

  function getMovieUrlValue(e) {
    setInputUrl(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      id: new Date().toString(),
      title: inputTitle,
      rating: inputRating,
      img: inputUrl,
    };

    addMovieHandler(data);
    openModalHandler();
  }

  return (
    <form onSubmit={handleSubmit} className="modalform">
      <div className="modal">
        <Input
          placeholder="Enter your favorite movie"
          type="text"
          value={inputTitle}
          onChange={getMovieTitleValue}
        />

        <Input
          placeholder="Enter your raiting"
          type="number"
          value={inputRating}
          onChange={getMovieRaitingValue}
        />

        <Input
          placeholder="Enter URL"
          type="url"
          value={inputUrl}
          onChange={getMovieUrlValue}
        />

        <button className="formButton" onClick={openModalHandler}>
          Cancel
        </button>
        <button className="formButton">Add</button>
      </div>
    </form>
  );
};
