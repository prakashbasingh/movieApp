import React from "react";

function NominationList(props) {
  console.log(props.nominee, "this is in nomination list <<<==========");
  return (
    <div>
      <h3>Nominations</h3>
      <span>(Only 5 Nomination Please)</span>
      {props.nominee.map((movie) => {
        console.log(movie, "this is in mapping prop to movie <==<==<==<==<==");
        return (
          <div>
            <p style={{ display: "inline", padding: "10px" }}>{movie.Title}</p>
            <button
              className="button"
              onClick={() => props.remove(movie)}
              style={{ display: "inline", margin: "10px" }}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default NominationList;
