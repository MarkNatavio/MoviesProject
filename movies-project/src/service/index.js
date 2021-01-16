import axios from 'axios';

// Constants for the Movie Database (TMDB) API
const key = 'd681d6302c1d36abb2ea52e15f7ba6a8'; // API key (d681d6302c1d36abb2ea52e15f7ba6a8)
const URL = 'https://api.themoviedb.org/3'; // basic API URL 
const genreUrl = `${URL}/genre/movie/list`; // URL to find movies by genre
const moviesUrl = `${URL}/discover/movie`; // URL to find similar movies
const movieUrl = `${URL}/movie`; // URL to find info on movie
const search = `${URL}/search/movie?api_key=${key}` // URL to find movies based on key word

// Get array of all genres
export const fetchGenre = async () => {
    try {
        const { data } = await axios.get(genreUrl, {
            params: {
                api_key: key,
                language: 'en_US',
                page: 1
            }
        })
        const modifiedData = data['genres'].map((g) => ({
            id: g['id'],
            name: g['name']
        }))

        return modifiedData;
    } catch (error) { }
}

// Get array of all movies of a genre
export const fetchMovieByGenre = async (genre_id) => {
    try {
        const { data } = await axios.get(moviesUrl, {
            params: {
                api_key: key,
                language: 'en_US',
                with_genres: genre_id
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
    } catch (error) { }
}

// Get data on movie selected
export const fetchMovieDetail = async (id) => {
    try {
        const { data } = await axios.get(`${movieUrl}/${id}`, {
            params: {
                api_key: key,
                language: 'en_US'
            }
        });

        return data;
    } catch (error) { }
}

// Get videos of the movie (the trailer)
export const fetchMovieVideos = async (id) => {
    try {
        const { data } = await axios.get(`${movieUrl}/${id}/videos`, {
            params: {
                api_key: key,
            }
        });
        return data['results'][0];
    } catch (error) { }
}

// Get data on movie cast
export const fetchCasts = async (id) => {
    try {
        const { data } = await axios.get(`${movieUrl}/${id}/credits`, {
            params: {
                api_key: key,
            }
        });
        const modifiedData = data['cast'].map((c) => ({
            id: c['cast_id'],
            character: c['character'],
            name: c['name'],
            img: 'https://image.tmdb.org/t/p/w200' + c['profile_path'],
        }))

        return modifiedData;
    } catch (error) { }
}

// Get array of similar movies
export const fetchSimilarMovie = async (id) => {
    try {
        const { data } = await axios.get(`${movieUrl}/${id}/similar`, {
            params: {
                api_key: key,
                language: 'en_US'
            }
        });
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
    } catch (error) { }
}

// Get array of movies based on key word search
export const movieSearch = async (title) => {
    try {
        const { data } = await axios.get(`${search}&query=${title}`, {
            params: {
                api_key: key,
                language: 'en_US'
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
    } catch (error) { }
}
