import React, { useCallback, useEffect, useState } from "react";
import './Home.css'
import MovieList from "./MovieList";
import Form from "./Form";

const Home = () => {

  const [movies, setMovies] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(null);

 const fetchMoviesHandler = useCallback(async() => {
    setFetching(true);
    setError(null);
    try {
      const response = await fetch('https://react-e---commerce-default-rtdb.firebaseio.com/movies.json');
   if(!response.ok){
     throw new Error('Something went wrong ....Retrying')
   }
     const data = await  response.json();
     
     const loadingMovies = [];
     for(const key in data){
       loadingMovies.push({
         id:key,
         title:data[key].title,
         openingText: data[key].openingText,
         releaseDate: data[key].releaseDate,  
       });
       
     }
      setMovies(loadingMovies); 
    }
   catch(error){
     setError(error.message);
   }
   setFetching(false);
  },[]);

  useEffect((event) => {
    
    fetchMoviesHandler();
  } , [fetchMoviesHandler])

  const onaddMovieHandler = async(movie) => {
    const response = await fetch('https://react-e---commerce-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      body:JSON.stringify(movie),
      headers:{
        'Content-Type' : 'application/json'
      }
    })
    const data = await response.json();
    console.log(data)
  };

  const deleteHandler = async(id) => {
    await fetch(`https://react-e---commerce-default-rtdb.firebaseio.com/movies/${id}.json`, {
      method: 'DELETE',
      body:JSON.stringify(id),
      headers:{
        'Content-Type' : 'application/json'
      }
    })
    setMovies(movies.filter((movie) => movie.id !== id))
  };

    return (

      <React.Fragment>
        <section>
        <Form onaddMovie = {onaddMovieHandler} />
        </section>
        <section>
          <button style={{borderRadius:'3rem'}} onClick={fetchMoviesHandler}>Fetch Movies</button>
        </section>
            <section>
             {!fetching && movies.length > 0 && <MovieList movies={movies} deleteButton = {deleteHandler} />  }
             {!fetching && movies.length === 0 && !error && <p>No Movies found !</p>}
             {!fetching && error && <p>{error}</p>}
             {fetching && <p>Loading...</p>}
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