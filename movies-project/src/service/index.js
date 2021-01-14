import axios from 'axios';

// Setting up URLs for data collected
const apiKey = 'd681d6302c1d36abb2ea52e15f7ba6a8'; // API key
const URL = 'https://api.themoviedb.org/3'; // API website URL
const nowPlayingURL = `${URL}/movie/now_playing`; // current playing trailer URL
const topRatedURL = `${URL}/movie/top_rated`; //  DB URL of top rated movies
const movieURL = `${URL}/movie`; // DB URL of movie info
const genreURL = `${URL}/genre/movie/list`; // DB URL of movies of specific genre
const moviesURL = `${URL}/discover/movie`; // DB URL of movies similar to a movie
const personURL = `${URL}/trending/person/week`; // WONT USE PROBABLY

// Get info of movie selected
export const fetchMovies = async()=> {
    try {
        const { data } = await axios.get(nowPlayingURL, {
            params: {
                API_KEY: apiKey,
                language: 'en_US',
                page: 1
            }
        })
        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularith'],
            title: m['title'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))
        return modifiedData;

    } catch (error){ }
}

export const fetchGenre = ()=> {
    try {

    } catch (error) { }
}

export const fetchMoviesOfGenre = ()=> {
    try {

    } catch (error) { }
}

export const fetchPersonsInfo = ()=> {
    try {

    } catch (error) { }
}

export const fetchTopMovies = ()=> {
    try {

    } catch (error) { }
}

export const fetchMovieInfo = ()=> {
    try {

    } catch (error) { }
}

export const fetchMovieVids = ()=> {
    try {

    } catch (error) { }
}

export const fetchCastMembers = ()=> {
    try {

    } catch (error) { }
}

export const fetchSimilarMovies = ()=> {
    try {

    } catch (error) { }
}