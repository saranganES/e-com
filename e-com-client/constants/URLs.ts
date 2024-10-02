const apiURL = 'http://localhost:8080';

const URLs = {
  sign_up: `${apiURL}/api/user/register`,
  sign_in: `${apiURL}/api/user/login`,
  get_all_user: `${apiURL}/api/user/get-all-users`,
  add_to_cart:  `${apiURL}/api/products/add-cart`,
  get_cart_list:`${apiURL}/api/products/get-cart`
};

export default URLs;
