import React, { useState, useEffect } from 'react'; 
import axios from "./axios"; 
import "./List.css";

const base_url= "https://image.tmdb.org/t/p/w500" //baseURL link for picture of poster 

function List({fetchUrl, title, isTopRated}) {
    const [movies, setMovies] = useState([]); //set the initial value to an empty array

    //using the useEffect to import the data from themoviedb.org
    useEffect(() => {
      async function fetchData(){
        const request = await axios.get(fetchUrl); 
        // console.log(request); //checking the type of data which will be fetched 
        setMovies(request.data.results);
        return request; 
      }
      fetchData();
    }, [fetchUrl]) //the empty bracket allow run once only when the page refreshed

    
  return (
        <div className={`popular_container ${isTopRated && "topRated_container"} `}>
          <h2>{title}</h2>
          <a>
              <div className={`popularCard_container ${isTopRated && "topRated_container"}`}>
                {movies.map(
                  movie => <img
                  key={movie?.id}
                  className={`movie_poster ${isTopRated && "topRated_poster"}`}
                  title={movie?.name || movie?.orginal_title || movie?.title}
                  src={`${base_url}${movie?.poster_path}`}
                  alt={movie.name}/>
                )}
              </div>
            </a>
        </div>
  )
}

export default List