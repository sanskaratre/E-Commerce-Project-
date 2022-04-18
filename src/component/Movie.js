import React from "react";
import Classes from './Movie.module.css';

const Movie  = (props) => {
    return (
        <li className={Classes.movie}>
            <h2>{props.title}</h2>
            <p>{props.openingText}</p>
            <h3>{props.releaseDate}</h3>
            <hr></hr>
            <button style={{backgroundColor:'white', borderRadius:'3rem', color:'Black'}} onClick={props.deleteButton}>Delete</button>
        </li>
    )
};

export default Movie;