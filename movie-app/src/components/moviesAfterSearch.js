import React from "react";
import "../App.css";

function MoviesAfterSearch(props) {
  console.log(props, " props in MoviesAfterSearch.js");

  return (
    <div className="movieDiv2">
      <h4> results for "{props.searchText}"</h4>
      <div className="movieCont container-fluid movie-app">
        <div className="row movieCard">
          {props.result.map((moviess) => {
            return (
              <div className="movieCard" id="nominated">
                <img
                  src={moviess.Poster}
                  alt="movie poster"
                  width="100"
                  height="150"
                />
                <h6>{moviess.Title}</h6>
                <p>{moviess.Year}</p>
                <button
                  disabled={
                    props.nominee.includes(moviess) ||
                    props.nominee.length === 5
                  }
                  id="nominateButton"
                  className="button"
                  onClick={() => props.handleNomination(moviess)}
                >
                  Nominate
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default MoviesAfterSearch;
