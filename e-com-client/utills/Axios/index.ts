import axios from 'axios';
//Helps to send cookie in all xhr request by itself
axios.defaults.withCredentials = false;
axios.defaults.headers.common['Content-Type'] = 'application/json';

export default axios;
