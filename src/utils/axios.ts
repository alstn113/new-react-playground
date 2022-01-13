import axios from "axios";

const token = localStorage.getItem("token");

const client = axios.create({
  baseURL: process.env.REACT_APP_ENDPOINT,
  withCredentials: true,
  headers: { Authorization: token ? `Bearer ${token}` : "" },
});

client.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

client.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    if (err.response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/401";
    }
    return Promise.reject(err);
  }
);

export default client;
