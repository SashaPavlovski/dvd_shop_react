import React, { useState } from "react";
import { TableMovies } from "../components/tableMovies";
import { moviesFromServer } from "../services/moviesServices";
import { sortMovies } from "../helpers/sortObjects";
export const MoviesContainer = () => {
  const [newArray, setNewArray] = useState(
    moviesFromServer().sort((a, b) => sortMovies(a, b))
  );

  const handleLikeFun = (idMovie, sigh) => {
    let newMovie = newArray.find((m) => {
      return m.id === idMovie;
    });

    if (newMovie) newMovie.like = sigh;

    let filterArray = newArray.filter((m) => {
      return m.id !== idMovie;
    });
    setNewArray([...filterArray, newMovie].sort((a, b) => sortMovies(a, b)));
  };
  return (
    <>
      <h3>showing {newArray.length} movies in the database</h3>
      <TableMovies
        moviesData={newArray}
        handleLike={handleLikeFun}
        handleDelete={(idDelete) => {
          let filterDelete = newArray.filter((m) => m.id !== idDelete);
          setNewArray(filterDelete.sort((a, b) => sortMovies(a, b)));
        }}
      ></TableMovies>
    </>
  );
};
