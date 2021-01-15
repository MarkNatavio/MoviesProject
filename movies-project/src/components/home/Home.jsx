import React, {useState, useEffect } from 'react'
import { fetchMovies, fetchGenre, fetchMovieByGenre, fetchCasts, fetchTopratedMovie } from '../../service';
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

export function Home() {
    
    const [genres, setGenres] = useState([]);
    const [movieByGenre, setMovieByGenre] = useState([]);
    
    
    const handleGenreClick = async (genre_id) => {
        setMovieByGenre(await fetchMovieByGenre(genre_id));
    };
    
    const genreList = genres.map((item, index) => {
        return (
          <li className="list-inline-item" key={index}>
            <button
              type="button"
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
    
      const movieList = movieByGenre.slice(0, 4).map((item, index) => {
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
              <ReactStars
                count={item.rating}
                size={20}
                color1={"#f4c10f"}
              ></ReactStars>
            </div>
          </div>
        );
      });

      return (
        <div className="container">
          <div className="row mt-3">
            <div className="col">
              <ul className="list-inline">{genreList}</ul>
            </div>
          </div>
    
          <div className="row mt-3">
            <div className="col">
              <div className="float-right">
                <i className="far fa-arrow-alt-circle-right"></i>
              </div>
            </div>
          </div>
          <div className="row mt-3">{movieList}</div>
    
          <hr className="mt-5" style={{ borderTop: "1px solid #5a606b" }}></hr>
    
          <div className="row mt-3 mb-5">
            <div className="col-md-4 col-sm-6" style={{ color: "#5a606b" }}>
              <h3>KEEP IN TOUCH</h3>
              <ul className="list-unstyled">
                <li>
                  <p>
                    <strong>
                      <i className="fas fa-map-marker-alt"></i> Phone:
                    </strong>{" "}
                    +01 (929) 320-9300
                  </p>
                </li>
                <li>
                  <p>
                    <strong>
                      <i className="fas fa-envelope"></i> Email:
                    </strong>{" "}
                    mbnatavio@gmail.com
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
}