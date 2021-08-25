import axios from "axios";

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: "http://121.5.114.161:6901",
    timeout: 5000
  });

  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(
    config => {
      if (localStorage.getItem("Authorization")) {
        config.headers.Authorization = localStorage.getItem("Authorization");
      }

      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  // 2.2.响应拦截
  instance.interceptors.response.use(
    res => {
      // console.log(res);

      return res.data;
    },
    err => {
      console.log(err);
      const { response } = err;
      if ((response.status = 401)) {
        localStorage.removeItem("Authorization");
        localStorage.removeItem("userName");
        localStorage.removeItem("userId");
        alert("请登陆后再使用哦～");
      }
    }
  );

  // 3.发送真正的网络请求
  return instance(config);
}
