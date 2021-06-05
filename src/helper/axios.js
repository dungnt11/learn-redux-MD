import axiosLibs from 'axios';
// config: https://axios-http.com/docs/instance

const axios = axiosLibs.create({
  baseURL: 'http://localhost:3000/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

export { axios };