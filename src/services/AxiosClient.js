import axios from 'axios';

// Cấu hình axios client cơ bản:

const AxiosClient = axios.create({
  baseURL: 'https://64ddcc50825d19d9bfb18747.mockapi.io/',
  responseType: 'json',
  timeout: 50000,
});

export default AxiosClient;
