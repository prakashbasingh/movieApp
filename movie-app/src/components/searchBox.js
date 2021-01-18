import React, { useState } from "react";

const searchBox = (props) => {
  return (
    <div className="col col-sm-4">
      <input
        className="form-control"
        placeholder="Enter the Search Term"
        type="text"
        value={props.searchText}
        onChange={handleChange}
      />
    </div>
  );
};
export default searchBox;
