import React from "react";
import "../App.css";

import NominationList from "./nominationList.js";
import MoviesAfterSearch from "./moviesAfterSearch.js";

function Movies(props) {
  console.log(props, " props in Movie.js");
  const alert = () => {
    if (props.nominee.length === 5) {
      alert("only five nomination please");
    }
  };

  return (
    <div className="movieDiv ">
      <div className="movieDiv2">
        <h4> Results for "{props.searchText}"</h4>
        <div className="movieCont container-fluid movie-app">
          <div className="row movieCard ">
            {props.result.map((moviess) => {
              return (
                <div
                  className="movieCard  d-flex align-items-center flex-column "
                  id="nominated"
                  key={moviess.imdbID}
                >
                  <div class="p-2">
                    <img
                      src={moviess.Poster}
                      alt="movie poster"
                      width="100"
                      height="150"
                    />
                    <h6>{moviess.Title}</h6>
                    <p>{moviess.Year}</p>
                  </div>
                  <button
                    disabled={
                      props.nominee.includes(moviess) ||
                      props.nominee.length === 5
                    }
                    id="nominateButton"
                    className="btn button mt-auto d-flex align-items-center"
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
      <div className="nominationList">
        <NominationList nominee={props.nominee} remove={props.handleRemove} />
      </div>
    </div>
  );
}
export default Movies;
