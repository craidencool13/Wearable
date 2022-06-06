import axios from 'axios';

import { IApiRequest } from 'app/models/index';

/**s
 * Initialize API service.
 * @param baseURL Optional. API Base URL.
 * @returns API instance.
 */

export const initApi = (baseURL: string): IApiRequest => {
  const headers: any = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const api = axios.create({
    baseURL,
    headers,
    timeout: 60000,
  });

  // Error handler interceptors
  api.interceptors.response.use(
    async response => {
      return response;
    },
    error => {
      return error?.response;
    },
  );

  const getRequest = url => api.get(url);
  const postRequest = (url, params) => api.post(url, params);
  const patchRequest = (url, params) => api.patch(url, params);
  const deleteRequest = (url, params) => api.delete(url, params);

  return {
    getRequest,
    postRequest,
    patchRequest,
    deleteRequest,
  };
};
