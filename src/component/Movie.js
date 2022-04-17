import React from "react";
import Classes from './Movie.module.css';

const Movie  = (props) => {
    return (
        <li className={Classes.Movie}>
            <h2>{props.title}</h2>
            <h3>{props.releaseDate}</h3>
            <p>{props.openingText}</p>
        </li>
    )
};

export default Movie;