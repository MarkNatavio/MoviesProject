import React, {useState, useEffect } from 'react'
import { fetchMovies } from '../../service';
import RBCarousel from 'react-bootstrap-carousel'


export function Home() {
    const [nowPlaying, setNowPlaying] = useState([]);
    
    useEffect(() => {
        const fetchAPI = async () => {
            setNowPlaying(await fetchMovies());
        };

        fetchAPI();
    }, []);

    return (
        <h1>Hello</h1>
    );
}