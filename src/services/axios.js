import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://it-squads-default-rtdb.firebaseio.com/'
});

export default axiosInstance;