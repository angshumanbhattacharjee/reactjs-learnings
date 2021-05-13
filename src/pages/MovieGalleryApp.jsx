import React from 'react';
import {MovieCard} from '../components/MovieCard';
import {MovieData} from '../resources/MovieData';
import './MovieGalleryApp.css';

export const MovieGalleryApp = () => {
    return (
        <>
            <h1 className="movie_heading"> TOP THRILLER MOVIES </h1>
            <div className="movie_card_container">
            {
                MovieData.map( (value) => {
                    return (
                        <MovieCard 
                        movieTitle={value.movieTitle} 
                        movieType={value.movieType} 
                        moviePosterLink={value.moviePosterLink}
                        movieTrailerLink={value.movieTrailerLink}/>
                    ); 
                })
            }
            </div>
        </>
    );
}