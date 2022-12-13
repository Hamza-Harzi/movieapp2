import React from "react";
import StartRating from "./StartRating";

function NaveBar(props) {
  //   console.log("this is my props  :>> ", props.type);
  //   console.log("this is my setType  :>> ", props.setType);
  return (
    <div className="nav">
      <div>
        <ul className="list-of-nav">
          <li>
            <a
              value={props.type}
              href="default.asp"
              onClick={() => props.filteFilms}
            >
              Action
            </a>
          </li>
          <li>
            <a
              value="Horror"
              href="news.asp"
              type={props.type}
              onClick={() => props.setType()}
            >
              Horror
            </a>
          </li>
          <li>
            <a
              value="Romance"
              href="contact.asp"
              type={props.type}
              onClick={() => props.setType()}
            >
              Romance
            </a>
          </li>
          <li>
            <a
              value="Comedies"
              href="about.asp"
              type={props.type}
              onClick={() => props.setType()}
            >
              Comedies
            </a>
          </li>
        </ul>
      </div>
      <div>
        <StartRating rating={props.rating} setRating={props.setRating} />
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter Your Films"
          onChange={props.filterSearch}
        />
      </div>
    </div>
  );
}

export default NaveBar;
