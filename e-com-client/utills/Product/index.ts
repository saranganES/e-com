import URLs from '@/constants/URLs';
import HttpService from '@/service/HttpService';
import { checkResponse } from '../Common/commonFn';

const handleAddCart = async (data: any) => {
  const responseData: any = await HttpService.post(URLs.add_to_cart, {
    ...data,
  });

  checkResponse(responseData?.status, responseData?.message);
  return responseData;
};

const getCartList = async (data: any) => {
  const responseData: any = await HttpService.post(URLs.get_cart_list, {
    ...data,
  });
  return responseData;
};

export { handleAddCart, getCartList};
