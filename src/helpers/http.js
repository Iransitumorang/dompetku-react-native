/* eslint-disable prettier/prettier */
import axios from 'axios';

const http = token => {
  const headers = {};
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }
  return axios.create({
    headers,
    baseURL: 'http://',
  });
};

export default http;
