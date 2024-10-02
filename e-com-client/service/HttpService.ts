import { ACCESS_TOKEN_FIELD_NAME } from '@/constants/common';
import axios from '@/utills/Axios';
import { Status, toastNotification } from '@/utills/Toaster';

const get = async (url: string, config?: any) => {
  const headers = prepareRequestHeaders(config);
  return await axios
    .get(url, headers)
    .then((response: any) => {
      if (response.status === 200) {
        return {
          type: 'SUCCESS',
          results: response?.data?.results,
          message: response?.data?.message,
          status: response?.data?.status,
        };
      } else {
        throw new Error(response.data?.message);
      }
    })
    .catch((error: any) => {
      handleErrors(error);
    });
};

const post = async (url: string, request: any, config?: any) => {
  const httpHeaders = prepareRequestHeaders(config);
  return await axios
    .post(url, request, httpHeaders)
    .then((response: any) => {
      if (response.status === 200 || response.status === 201) {
        return {
          type: 'SUCCESS',
          message: response?.data?.message,
          status: response?.data?.status,
          results: response?.data?.results,
        };
      }
    })
    .catch((error: any) => {
      handleErrors(error);
    });
};

const put = async (url: string, request?: any, config?: any) => {
  const headers = prepareRequestHeaders(config);
  return await axios
    .put(url, request, headers)
    .then((response: any) => {
      if (response.status === 200) {
        return {
          type: 'SUCCESS',
          message: response?.data?.message,
          status: response?.data?.status,
        };
      } else {
        throw new Error(response.data.message);
      }
    })
    .catch((error: any) => {
      handleErrors(error);
    });
};

const handleErrors = (error: any) => {
  if (error.response?.status === 401) {
    localStorage.removeItem(ACCESS_TOKEN_FIELD_NAME);
    toastNotification(
      Status.ERROR,
      'Your session expired!! Redirecting to login page',
    );
    location.href = '/';
  } else {
    toastNotification(Status.ERROR, 'Something went to wrong!');
  }
};

const prepareRequestHeaders = (config: any) => {
  let token = null;
  if (typeof window !== 'undefined') {
    // Client-side-only code
    token = localStorage.getItem(ACCESS_TOKEN_FIELD_NAME);
  }
  return {
    headers: {
      ...config?.headers,
      ...(token
        ? {
            Authorization: 'Bearer ' + token,
          }
        : null),
    },
  };
};

const Delete = async (url: string, config?: any) => {
  const headers = prepareRequestHeaders(config);
  return await axios
    .delete(url, headers)
    .then((response: any) => {
      if (response.status === 200) {
        return {
          type: 'SUCCESS',
          message: response?.data?.message,
          status: response?.data?.status,
        };
      } else {
        throw new Error(response.data.message);
      }
    })
    .catch((error: any) => {
      handleErrors(error);
    });
};

const HttpService = {
  get,
  put,
  post,
  Delete,
};

export default HttpService;
