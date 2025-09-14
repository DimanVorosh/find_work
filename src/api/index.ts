import axios, { CreateAxiosDefaults, AxiosInstance } from 'axios';

const url = 'https://mobile.handswork.pro/api';

const instance = (options: CreateAxiosDefaults): AxiosInstance => {
  return axios.create({
    ...options,
    baseURL: `${options.baseURL}`,
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
  });
};

const api = instance({ baseURL: url });

export default api;
