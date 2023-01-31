import React from 'react'; 
import { useState, useEffect } from 'react'; 
import axios from "./axios"; 
import "./Banner.css"

const base_url= "https://image.tmdb.org/t/p/w500" //baseURL link for picture of poster 

function Banner({fetchUrl}) {

  //using the useEffect to get the data from themoviedb.org
  const [movies, setMovies] = useState([]); //set the initial value to an empty array
  
  useEffect(() => {
    async function fetchData() {
        const request = await axios.get(fetchUrl); 
        console.log(request); //checking the data get from the api 
        setMovies(request.data.results); 
        return request; 
    }
    fetchData(); 
  }, [fetchUrl]);

  return (
    <div className='banner_container'>
      <img 
      className='banner_poster'
      src={`${base_url}${movies[0].backdrop_path}`}
      alt={`${movies[0].name}`}
      />
    </div>
  )
}

export default Banner