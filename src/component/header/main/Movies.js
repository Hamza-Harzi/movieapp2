import React from "react";
import MovieCart from "./MovieCart";

function Movies(props) {
  return (
    <div className="all-movies">
      {props.allMovies.map((movieCart) => {
        return <MovieCart key={movieCart.id} movieCart={movieCart} />;
      })}
    </div>
  );
}

export default Movies;
