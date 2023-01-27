import React from 'react'; 
import requests from "./request"; 
import List from "./List"; 
import Banner from "./Banner"; 
import Nav from "./Nav"; 

function App () {
// NavBar() {
  return (
    <div>
        <p>Coding with Huy</p>
        {/* NavBar */}
        <Nav />
        {/* banner */}
        <Banner />
        {/* movie box + top-rated box */}
        <div className="movie_wrapper">
            <List title="Popular Movie" fetchUrl={requests.fetchPopular}/>
            <List title="Top Rated Movie" fetchUrl={requests.fetchTopRated}/>
        </div>
        {/* footer */}
    </div>
  )
}

export default App; 
// NavBar