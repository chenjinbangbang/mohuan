import axios from 'axios';
import { Message } from 'element-ui';

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000,
});

service.interceptors.request.use(config => {
  return config;
},error => {
  Promise.reject(error);
});

service.interceptors.response.use(response => {
  let res = response.data;

  return res;
},error => {
  Message({message: error.message,type: 'error',duration: 2000,center: true});
  return Promise.reject(error);
});

export default service;
