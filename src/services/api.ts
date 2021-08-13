import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

api.interceptors.response.use(res => {
  let limitElements = Object.values(res.data).filter((value, index) => index < 15) as any;

  return limitElements;
});
