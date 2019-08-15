import axios from 'axios';
export const api = axios.create({
    baseURL: 'https://mk7j8h3god.execute-api.us-west-2.amazonaws.com/Prod/api/',
    timeout: 60000
  });