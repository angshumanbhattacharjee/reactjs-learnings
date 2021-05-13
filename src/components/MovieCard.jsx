import {React, Button} from 'react';
import '../pages/MovieGalleryApp.css';

export const MovieCard = (props) => {
    return (
        <div className="movie_card">
            <div>
                <img className="poster_img" src={props.moviePosterLink} alt={props.altText} />
            </div>
            <div className="card_info">
                <h3 className="card_title"> {props.movieTitle} </h3>
                <h4 className="card_category"> {props.movieType} </h4>
                <a href={props.movieTrailerLink} target="_blank">
                    <button> WATCH NOW </button>
                </a>
            </div>
        </div>
    );
}