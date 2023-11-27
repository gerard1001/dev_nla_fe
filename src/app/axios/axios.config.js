import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:2807/api/v1/",
});

axiosInstance.interceptors.request.use(
  (request) => {
    request.headers.authorization = `${"Bearer" + " "}${
      JSON.parse(localStorage.getItem("user"))?.token
    }`;
    return request;
  },
  (error) => Promise.reject(error)
);

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
