import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.fortureplasticos.com.br',
});

export default api;
