import React from 'react'; 
import { useState, useEffect } from 'react'; 
import axios from "./axios"; 

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
     {movies && movies[0].original_title}
    </div>
  )
}

export default Banner