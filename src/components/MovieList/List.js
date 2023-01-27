import React, { useState, useEffect } from 'react'; 
import axios from "./axios";
import requests from "./requests.js"; 

const base_url= "https://image.tmdb.org/t/p/w500" //baseURL link for picture of poster 
function List(fetchUrl, title) {
    const [movies, setMovies] = useState([]); //set the initial value to an empty array

    async function FetchData (){    
        const request = await axios.get(fetchUrl); 
        setMovies(request.data.result); 
        console.log(request); 

    }

  return (
    <div className="list_container">
        <div>
            
        </div>
    </div>
  )
}

export default List