import React from 'react';
import {MovieCard} from '../components/MovieCard';
import {MovieData} from '../resources/MovieData';
import {MovieItemCard} from '../components/MovieItemCard';
import './MovieGalleryApp.css';

export const MovieGalleryApp = () => {
    return (
        <div>
            <h1 className="movie_heading"> TOP THRILLER MOVIES </h1>
            {
                MovieData.map( (value) => {
                    return (
                        <MovieItemCard 
                            key={value.id}
                            movieTitle={value.movieTitle} 
                            movieType={value.movieType} 
                            moviePosterLink={value.moviePosterLink}
                            movieTrailerLink={value.movieTrailerLink}/>
                    ); 
                })
            }
        </div>
    );
}