import axios from 'axios';
export const api = axios.create({
    //baseURL: 'https://mk7j8h3god.execute-api.us-west-2.amazonaws.com/Prod/api/',
    baseURL: 'http://localhost:53993/api/',
    timeout: 60000
  });