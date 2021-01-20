import React from "react";

function NominationList(props) {
  console.log(props.nominee, "this is in nomination list <<<==========");
  return (
    <div className=" container" style={{ marginTop: "20px" }}>
      <h3 class="card-title mb-0">Nominations</h3>
      {props.nominee.map((movie) => {
        return (
          <div class="card">
            <div class="card-body d-flex justify-content-around align-items-center">
              <p class="card-text">{movie.Title}</p>
              <button
                className="btn btn-danger d-flex align-items-center"
                onClick={() => props.remove(movie)}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default NominationList;
