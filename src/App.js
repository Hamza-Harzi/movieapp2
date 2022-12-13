import "./App.css";
import React, { useState, useEffect } from "react";
import ourFilms from "./Data";
import Movies from "./component/header/main/Movies";
import NaveBar from "./component/header/NaveBar";

function App() {
  const [allMovies, setAllMovies] = useState(ourFilms);
  const [type, setType] = useState("Action, Horror, Romance, Comedies");
  const [rating, setRating] = useState(5);
  // console.log("objeegsgergct.typeeeeeeeeee :>> ", type);

  // useEffect(() => {
  //   const filteFilms = ourFilms.filter((item) => {
  //     // console.log("first itemsssss", item.type);
  //     return item.type.toLowerCase() === type.toLowerCase();
  //   });

  //   setAllMovies(filteFilms);
  // }, [type]);

  useEffect(() => {
    const filteWithstarts = ourFilms.filter((item) => {
      return item.rate <= rating;
    });
    setAllMovies(filteWithstarts);
  }, [rating]);

  const filterSearch = (e) => {
    const filteFilms = ourFilms.filter((item) => {
      return (
        item.title.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
      );
    });
    setAllMovies(filteFilms);
  };

  return (
    <div className="App">
      <NaveBar
        rating={rating}
        setRating={setRating}
        type={type}
        setType={setType}
        filterSearch={filterSearch}
      />
      <div className="App-header">
        <Movies allMovies={allMovies} />
      </div>
    </div>
  );
}

export default App;
