import axios from "axios";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:2807/api/v1/",
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
