
import { notification } from "antd";
import axios,{AxiosError} from "axios";

const authApi = axios.create({
  baseURL: "https://immigrant.jprq.site/api/v1",
  timeout: 10000,
});

authApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    } else {
      return config;
    }
    return config;
  },
  
  (error: AxiosError) => {
    notification.error({
      message: "Response Error",
      description: error?.message || "An error occurred" ,
    });
  }
);

export const endpoints = {
  auth: {
    signIn: "/users/sign-in/", // post
    refresh: "/users/refresh/", //post
    
  },
  users:{
    me: "/users/me/", // get
  },
  immigrants:{
    add:"/immigrants/add", // post
    get:"/immigrants/get", // get

  }

};

export default authApi;