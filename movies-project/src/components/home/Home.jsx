import React, { useState, useEffect } from "react";
import { fetchGenre, fetchMovieByGenre, movieSearch } from "../../service/index";
import Footer from '../Footer'
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { Link } from "react-router-dom";

export function Home() {

  let inputText = '';

  const [genres, setGenres] = useState([]);
  const [movieByGenre, setMovieByGenre] = useState([]);
  const [movieTitle, setSearchTitle] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setGenres(await fetchGenre());
      setMovieByGenre(await fetchMovieByGenre(0));
      setSearchTitle(await movieSearch("$"));
    };

    fetchAPI();
  }, []);

  // Searching movies of specific genre
  const handleGenreClick = async (genre_id) => {
    setMovieByGenre(await fetchMovieByGenre(genre_id));
    setSearchTitle(await movieSearch("$"));
  };

  // Searching movies based on keyword
  const handleMovieSearch = async () => {
    setSearchTitle(await movieSearch(inputText));
    setMovieByGenre(await fetchMovieByGenre(0));
  }

  const handleNewKeyword = (event) => {
    inputText = event.target.value;
  }
  
  const moviesSearched = movieTitle.map((item, index) => {
    return (
      <div className="col-md-3 col-sm-6" key={index}>
        <div className="card">
          <Link to={`/movie/${item.id}`}>
            <img className="img-fluid" src={item.poster} alt={item.title}></img>
          </Link>
        </div>
        <div className="mt-3">
          <p style={{ fontWeight: "bolder" }}>{item.title}</p>
          <p>Rated: {item.rating}</p>
        </div>
      </div>
    );
  });

  const genreList = genres.map((item, index) => {
    return (
      <li className="list-inline-item" key={index}>
        <button
          type="button"
          style={{color:'gold'}}
          className="btn btn-outline-info"
          onClick={() => {
            handleGenreClick(item.id);
          }}
        >
          {item.name}
        </button>
      </li>
    );
  });

  const movieList = movieByGenre.map((item, index) => {
    return (
      <div className="col-md-3 col-sm-6" key={index}>
        <div className="card">
          <Link to={`/movie/${item.id}`}>
            <img className="img-fluid" src={item.poster} alt={item.title}></img>
          </Link>
        </div>
        <div className="mt-3">
          <p style={{ fontWeight: "bolder" }}>{item.title}</p>
          <p>Rated: {item.rating}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-1">
            <h1 style={{color: 'white'}}>Home</h1>
        </div>
      </div>

      <hr style={{ borderTop: "1px solid #5a606b" }}></hr>
      
      <h3 className="mt-3" style={{color: 'white'}}>Search</h3>
      <form>
          <input type='text' placeholder='Looking for something?' onChange={handleNewKeyword}></input>
          <button type="button" style={{color:'gold'}} className="btn btn-outline-info"
            onClick={ handleMovieSearch }>Enter</button>
      </form>
      
      <div className="row mt-3">
        <div className="col">
          <h3 className="mt-3" style={{color: 'white'}}>Genres:</h3>
          <ul className="list-inline">{genreList}</ul>
        </div>
      </div>

      <hr style={{ borderTop: "1px solid #5a606b" }}></hr>
      <h3 style={{color: 'white'}}>{"Movies"}</h3>

      <div className="row mt-3">{moviesSearched}</div>
      <div className="row mt-3">{movieList} </div>
    <hr className="mt-5" style={{ borderTop: "1px solid #5a606b" }}></hr>
    <Footer/>
    </div>
  );
}
