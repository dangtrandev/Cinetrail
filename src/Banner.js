import React from 'react'; 
import { useState, useEffect } from 'react'; 
import axios from "./axios"; 
import "./Banner.css"; 

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
// import StarRatings from "react-star-ratings";


const base_url= "https://image.tmdb.org/t/p/w500" //baseURL link for picture of poster 

function Banner({fetchUrl}) {

  //using the useEffect to get the data from themoviedb.org
  const [movies, setMovies] = useState([]); //set the initial value to an empty array
  const [index, setIndex] = useState([0]);
  useEffect(() => {
    async function fetchData() {
        const request = await axios.get(fetchUrl); 
        console.log(request); //checking the data get from the api 
        setMovies(request.data.results); 
        return request; 
    }
    fetchData(); 
  }, [fetchUrl]);
  //arrow function for clicking the left arrow 
  const handelLeft =()=>{
    if(index === 0) {
      setIndex(movies.length -1); 
      return; 
    } else {
      setIndex((preIndex) =>(preIndex -1))
    }
  }
 
  //function for clicking the right arrow 
  const handleRight=()=>{
    if(index === movies.length -1 ){
      setIndex(0);
    } else {
      setIndex( (preIndex) => (preIndex + 1))
    }
  }

  return (
    <div className='banner_container'>
      <div className="banner_overlay">
        <MdKeyboardArrowLeft
            className="left-arrow"
            onClick={handelLeft}
          ></MdKeyboardArrowLeft>

        <MdKeyboardArrowRight
            className="right-arrow"
            onClick={handleRight}
          ></MdKeyboardArrowRight>

        <div className="banner_info">
          <h1 className="banner_title">{movies[0].title}</h1>
          <p className="banner_description">{movies[0].overview}</p>
          <p className="banner_genre">{movies[0].genre_ids[0].name}</p>
          <p className="banner_release_date">{`Release Date: ${movies[0].release_date}`}</p>
        </div>
     
      </div>
      <img 
      className='banner_poster'
      src={`${base_url}${movies[0].backdrop_path}`}/>
    </div>
  )
}

export default Banner