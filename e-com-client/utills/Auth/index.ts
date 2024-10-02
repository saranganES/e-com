import URLs from '@/constants/URLs';
import HttpService from '@/service/HttpService';
import { checkResponse } from '../Common/commonFn';
import { ACCESS_TOKEN_FIELD_NAME } from '@/constants/common';

const handleSignIn = async (data: any) => {
  const responseData: any = await HttpService.post(URLs.sign_in, {
    ...data,
  });

  localStorage.setItem(ACCESS_TOKEN_FIELD_NAME, responseData?.results?.token);

  checkResponse(responseData?.status, responseData?.message);
  return responseData;
};

const handleSignUp = async (data: any) => {
  const responseData: any = await HttpService.post(URLs.sign_up, {
    ...data,
  });
  localStorage.setItem(ACCESS_TOKEN_FIELD_NAME, responseData?.results?.token);
  checkResponse(responseData?.status, responseData?.message);
  return responseData?.status;
};

const getAllUsers = async (data: any) => {
  const responseData: any = await HttpService.get(URLs.get_all_user);
  checkResponse(responseData?.status, responseData?.message);
  return responseData?.status;
};

export { handleSignIn, handleSignUp, getAllUsers };
