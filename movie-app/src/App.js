import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import Movies from "./components/movies.js";
import Header from "./components/header.js";
// import SearchBox from "./components/searchBox.js";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [result, SetResult] = useState([]);
  console.log(result, "000000000000000000000000000000000000000");

  const [nominee, setNominee] = useState([]);

  const handleChange = (event) => {
    event.preventDefault();
    setSearchText(event.target.value);
  };

  // fetching movies data from OMDB API
  // 2) https://www.omdbapi.com/?s=${searchText}&apikey=8de06584
  // 1) https://www.omdbapi.com/?s=${searchText}&apikey=841d3747
  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?s=${searchText}&apikey=841d3747`)
      .then((response) => {
        console.log(response.data.Search, " this is the search result");

        var movieResult = [];
        response.data.Search.map((movieSearchResult) => {
          console.log(movieSearchResult, "this is movieSearchResult result");

          movieResult.push(movieSearchResult);

          if (response.data.Search) {
            SetResult(movieResult);
          } else {
            SetResult("");
          }
        });
      })
      .catch((error) => {
        console.log(error, "axios get request failed");
      });
  }, [searchText]);

  // this useEffect will allow reload the saved movie list from local storage
  useEffect(() => {
    const localStorageMovies = JSON.parse(
      localStorage.getItem("react-movie-app-nominated-list")
    );
    if (localStorageMovies) {
      setNominee(localStorageMovies);
    }
  }, []);

  // setting nominated list to local storage that will render saved nominated movie list after page refresh
  const saveToLocalStorage = (movieItems) => {
    localStorage.setItem(
      "react-movie-app-nominated-list",
      JSON.stringify(movieItems)
    );
  };

  //  to add movies to the nomination list
  const addMovieToNominationList = (movie) => {
    const newNominationList = [...nominee, movie];

    setNominee(newNominationList);
    console.log(newNominationList, "newNomination List ....");

    saveToLocalStorage(newNominationList);

    if (newNominationList.includes(movie.imdbID)) {
      // alert(movie.title + "has been already added");
      document.getElementById("nominateButton").disabled = true;
    }
  };

  // to remove movie from the nomination list
  const removeMovieFromNominationList = (movie) => {
    const newNominationList2 = nominee.filter(
      (nominated) => nominated.imdbID !== movie.imdbID
    );
    setNominee(newNominationList2);
    console.log(newNominationList2, "Whats Here XXXXXXXXXXXXX");
    saveToLocalStorage(newNominationList2);
  };
  console.log(searchText, "VVVVVVVVVVVVVVVVVVVVVVVV");

  // const addSpaces = (string) => {
  //   let a = string;
  //   a.push(" ");
  //   a.unshift("");
  //   return a.join("");
  // };
  return (
    <div className="App">
      <Header />
      {/* <SearchBox searchText={searchText} setSearchText={setSearchText} /> */}
      <div className=" container form-group ">
        <label class="col-sm-3 col-form-label" for="email">
          Search
        </label>
        <div className="col-sm-9">
          <input
            className="form-control"
            id="email"
            placeholder="Enter the Search Term"
            type="text"
            value={searchText}
            onChange={handleChange}
          />
        </div>
      </div>

      <Movies
        result={result}
        searchText={searchText}
        handleNomination={addMovieToNominationList}
        nominee={nominee}
        handleRemove={removeMovieFromNominationList}
      />
    </div>
  );
};

export default App;
