import React from 'react'; 
import { useState, useEffect } from 'react'; 
import axios from "./axios"; 


function Banner(fetchUrl) {

  //using the useEffect to get the data from themoviedb.org
  const [movie, setMovie] = useState([]); //set the initial value to an empty array
  
  useEffect( () => {
    async function fetchData() {
        const request = await axios.get(fetchUrl); 
        console.log(request); 
    }
  }, [fetchUrl])

  return (
    <div className='banner_container'>

    </div>
  )
}

export default Banner