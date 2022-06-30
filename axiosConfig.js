import axios from 'axios'
const remote_url="https://express-doc.herokuapp.com"
const local_url="http://localhost:8000"
// Set config defaults when creating the instance
const axiosInstance = axios.create({
  baseURL: remote_url
});

// Alter defaults after instance has been created
axiosInstance.defaults.headers.common['token'] = process.env.REACT_APP_SITE_TOKEN;

export default axiosInstance;