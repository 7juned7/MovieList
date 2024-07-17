import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movie';

const MovieList = () => {
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        axios.get('https://dummyapi.online/api/movies')
            .then(response => {
                setMovies(response.data);
                console.log(movies)
            })
            .catch(error => {
                console.error('Error fetching movies:', error);
            });

    }, []);

    return (
        <div>
            <h1>Movie List</h1>
            <div className="movie-list">
                {movies.map(movie => (
                    <Movie key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default MovieList;
