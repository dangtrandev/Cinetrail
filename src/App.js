import React from 'react'; 
import requests from "./request"; 
import List from "./List"; 

function App () {
// NavBar() {
  return (
    <div>
        {/* NavBar */}
        {/* banner */}
        {/* movie box + top-rated box */}
        <List title="Trending Movie" fetchUrl={requests.fetchTrending}/>
        {/* footer */}
    </div>
  )
}

export default App; 
// NavBar