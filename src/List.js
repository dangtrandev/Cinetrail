import React, { useState, useEffect } from 'react'; 
import axios from "./axios"; 

const base_url= "https://image.tmdb.org/t/p/w500" //baseURL link for picture of poster 
function List(fetchUrl, title) {
    const [movies, setMovies] = useState([]); //set the initial value to an empty array

    useEffect(() => {
      async function fetchData(){
        const request = axios.get(fetchUrl); 
        console.log(request); //checking the type of data which will be fetched 
      }
      fetchData();
    }, []) //the empty bracket allow run once only when the page refreshed
  return (
    <div className="list_container">
        <div>
            
        </div>
    </div>
  )
}

export default List