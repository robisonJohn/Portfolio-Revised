import axios from 'axios';

// const baseUrl = process.env.NODE_ENV === 'production' ? 'https://robison-portfolio-api.herokuapp.com/' : 'http://localhost:3000' 
const baseUrl = 'https://robison-portfolio-api.herokuapp.com/';
const api = axios.create({
    baseURL: baseUrl
})



export default api;