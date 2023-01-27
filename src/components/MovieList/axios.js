import axios from 'axios'; 

const instance = axios.create({baseUrl: "https//api.themoviebd.org/3"})

export default instance; 