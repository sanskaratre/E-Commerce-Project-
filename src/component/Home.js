import React, { useState } from "react";
import './Home.css'
import MovieList from "./MovieList";

const Home = () => {

  const [movies, setMovies] = useState([]);

  const fetchMoviesHandler = () => {
    fetch('https://swapi.dev/api/films/').then((response) => {
      return response.json();
    }).then((data) => {
      const transformedMovies = data.results.map((moviedata) => {
        return {
          id :moviedata.episode_id,
          title: moviedata.title,
          openingText: moviedata.opening_crawl,
          releaseDate:moviedata.release_Date
        }
      });
      setMovies(transformedMovies);
    })
  };

    return (

      <React.Fragment>
        <section>
          <button onClick={fetchMoviesHandler}>Fetch Movies</button>
        </section>
            <section>
              <MovieList movies={movies} />
            </section>
        </React.Fragment>
       
            // <div className="homebody">
            //   <h3 className="hometitle">Tours</h3>
            //   <ul className="homeList">
            //     <li>
            //       JUL16 <span>DETROIT DTE ENERGY MUSIC THEATRE</span>
            //       <button>BUY TICKETS</button>
            //     </li>
        
            //     <li>
            //       JUL19 <span>TORONTO,ON BUDWESTER STAGE</span>
            //       <button>BUY TICKETS</button>
            //     </li>
        
            //     <li>
            //       JUL22 <span>BRISTOW, VA JIGGY LUBE LIVE</span>
            //       <button>BUY TICKETS</button>
            //     </li>
        
            //     <li>
            //       JUL29 <span>PHOENIX, AZ AK-CHIN PAVILION</span>
            //       <button>BUY TICKETS</button>
            //     </li>
        
            //     <li>
            //       AUG 2 <span>LAS VEGAS, NV T-MOBILE ARENA</span>
            //       <button>BUY TICKETS</button>
            //     </li>
        
            //     <li>
            //       AUG 7 <span>CONCORD, CA CONCORD PAVILION</span>
            //       <button>BUY TICKETS</button>
            //     </li>
            //   </ul>
            // </div> 
    )
};

export default Home;