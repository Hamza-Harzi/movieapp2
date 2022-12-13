import React from "react";

function StartRating(props) {
  return (
    <div className="star-rating">
      {[...Array(5)].map((start, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= props.rating ? "on" : "off"}
            onClick={() => props.setRating(index)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
}

export default StartRating;
