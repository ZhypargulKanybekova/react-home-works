import "./App.css";
import React, { useState } from "react";
// import {Input} from "./ModalForm.jsx/Input"
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { OpenModal } from "./components/ModalForm/OpenModal";
import { movies } from "./utils/constants";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [movie, setMovie] = useState(movies);

  console.log("movie", movie);

  const addMovieHandler = (data) => {
    const addMovie = [...movie, data];
    setMovie(addMovie);
  };

  function openModalHandler() {
    setOpenModal((prev) => !prev);
    console.log("click");
  }

  function deleteMovieCard(id) {
    const newData = movie.filter((el) => el.id !== id);
    setMovie(newData);
  }

 

  return (
    <div className="App">
      <Header openModalHandler={openModalHandler} />
      <MainContent
        openModalHandler={openModalHandler}
        movies={movie}
        onDelete={deleteMovieCard}
      />

      {openModal && (
        <OpenModal
          openModalHandler={openModalHandler}
          addMovieHandler={addMovieHandler}
        />
      )}
    </div>
  );
} 

export default App;
