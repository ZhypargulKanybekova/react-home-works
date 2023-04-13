import { MainItem } from "./MainItem";

export const MainContent = ({ openModalHandler, movies, onDelete }) => {
  return (
    <ul>
      {movies.map((el) => {
        return (
          <MainItem
            key={el.id}
            img={el.img}
            id={el.id}
            title={el.title}
            rating={el.rating}
            openModalHandler={openModalHandler}
            onDelete={onDelete}
          />
        );
      })}
    </ul>
  );
};
