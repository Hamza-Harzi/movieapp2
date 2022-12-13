import React, { useState } from "react";

function MovieCart(props) {
  const [rating, setRating] = useState(props.movieCart.rate);
  return (
    <div className="movie-cart">
      <ul>
        <li style={{ marginBottom: "20px" }}>{props.movieCart.title}</li>
        <li>
          <img src={props.movieCart.poster} alt={props.movieCart.title} />{" "}
        </li>
        <li>{props.movieCart.decription}</li>
        <li>
          {[...Array(5)].map((start, index) => {
            index += 1;
            return (
              <button
                type="button"
                key={index}
                className={index === rating ? "on" : "off"}
              >
                <span className="star">&#9733;</span>
              </button>
            );
          })}
        </li>
      </ul>

      <button className="btn">Add To Favorite</button>
    </div>
  );
}

export default MovieCart;
