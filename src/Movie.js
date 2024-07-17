import React from 'react';

const Movie = ({ movie }) => {
    return (
        <div className="movie">
            <h2>{movie.movie}</h2>
            <p> Rating: {movie.rating}</p>
            {/* <img src={{ movie.image }} alt="" /> */}
            <a href={movie.imdb_url}>Imbdurl: {movie.imdb_url}</a>

        </div >
    );
};

export default Movie;