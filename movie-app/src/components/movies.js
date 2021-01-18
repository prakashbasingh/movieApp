import React from "react";
import "../App.css";
import NominationList from "./nominationList.js";

function Movies(props) {
  console.log(props, " props in Movie.js");

  // let button = document.getElementById("nominateButton");
  // console.log(
  //   button,
  //   "1111111111111111111111111111111111111111111111111111111111111"
  // );
  // add .

  // const disable = (moviess) => {
  //   let nomineee = props.nominee;
  //   // console.log(nomineee, "EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
  //   // let button = document.getElementById("nominateButton")

  //   nomineee.map((m) => {
  //     console.log(m, "MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM");
  //     if (m.Title === moviess.Title) {
  //       document.getElementById("nominateButton").disabled = true;
  //       // alert("this is already added");
  //     } else {
  //       document.getElementById("nominateButton").disabled = false;
  //     }
  //   });
  // };

  return (
    <div className="movieDiv ">
      <div className="movieDiv2">
        <h4> results for "{props.searchText}"</h4>
        <div className="container-fluid nameFluid">
          <div>
            {props.result.map((moviess) => {
              return (
                <div className="row" id="nominated">
                  <img
                    src={moviess.Poster}
                    alt="movie poster"
                    width="100"
                    height="150"
                  />
                  <h6>{moviess.Title}</h6>
                  <p>{moviess.Year}</p>
                  <button
                    // {...disable(moviess)}
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
                  {/* <p
                    style={{
                      display:
                        props.nominee.Title === moviess.Title
                          ? "This has been added already"
                          : "none",
                    }}
                  ></p> */}
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

// array.forEach(function (e, i) {
//   for (var j = i + 1; j < array.length; j++) {
//     if (e.Tid == array[j].Tid) {
//       // ids match, do something
//     }
//   }
// });

// disabled={props.nominee.length === 5}
