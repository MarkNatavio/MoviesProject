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


    const movies = nowPlaying.slice(0,5).map((item, index) =>{
        return (
            <div key={index}>
                <div className="carousel-center">
                    <img style={{height: 600}} src={item.backPoster} alt={item.title}/>
                </div>
            </div>
        );
    })
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <RBCarousel>
                        autoplay={true}
                        pauseOnVisibility={true}
                        slideshowSpeed={500}
                        version={4}
                        indicators={false}

                    </RBCarousel>
                </div>
            </div>
        </div>
    )
}