import axios from 'axios';
import qs from 'qs';

const http = axios.create({
  baseURL: '/wyy',
  withCredentials: true,
  transformRequest: (data) => {
    return qs.stringify(data);
  },
});

http.interceptors.response.use(
  // 响应拦截
  (res) => {
    return res.data;
  },
  (err) => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          console.log('请求错误');
          break;
        case 401:
          console.log('未授权访问');
          break;
        default:
          console.log('其他错误信息');
      }
    }
    return err;
  }
);

export default http;
