import React from 'react'; 
import requests from "./request"; 
import List from "./List"; 
import Banner from "./Banner"; 
import Nav from "./Nav"; 
import "./App.css"; 

function App () {
// NavBar() {
  return (
    <div className="homepage_container">
        <p>Coding with Huy</p>
        {/* NavBar */}
        <Nav />
        <Banner />
        {/* banner */}
        {/* movie box + top-rated box */}
        <div className="movie_wrapper">
            <List title="Popular Movie" fetchUrl={requests.fetchPopular}/>
            <List title="Top Rated Movie" fetchUrl={requests.fetchTopRated} isTopRated/>
        </div>
        {/* footer */}
    </div>
  )
}

export default App; 
// NavBar