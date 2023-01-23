import React from "react";
import "./MovieListing.scss";
import { useSelector } from "react-redux";

import MovieCard from "../MovieCard/MovieCard";

function MovieListing() {
    // useSelector ใช้เข้าถึงค่าใน store
    const { movies } = useSelector((state) => state.movies);

    return (
        <div className="movie-container">
            {movies && movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)}
        </div>
    );
}

export default MovieListing;
