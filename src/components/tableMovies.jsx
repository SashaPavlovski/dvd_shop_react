import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const TableMovies = ({ moviesData, handleLike, handleDelete }) => {
  return (
    <table className="table table-success table-striped">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Genre</th>
          <th>Rate</th>
          <th>Stock</th>
          <th>Like</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {moviesData.map((m) => {
          return (
            <tr>
              <th>{m.id}</th>
              <td>{m.title}</td>
              <td>{m.genre}</td>
              <td>{m.rate}</td>
              <td>{m.stock}</td>
              <td>
                {m.like ? (
                  <div
                    onClick={() => {
                      handleLike(m.id, false);
                    }}
                  >
                    {<FavoriteIcon></FavoriteIcon>}
                  </div>
                ) : (
                  <div
                    onClick={() => {
                      handleLike(m.id, true);
                    }}
                  >
                    {<FavoriteBorderIcon></FavoriteBorderIcon>}
                  </div>
                )}
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDelete(m.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
