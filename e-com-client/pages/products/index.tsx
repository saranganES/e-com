import { CartContext } from '@/components/Contexts/Cart';
import { UserContext } from '@/components/Contexts/UserContext';
import Layout from '@/components/Layout';
import { products } from '@/Products';
import { getCartList, handleAddCart } from '@/utills/Product';
import { Status, toastNotification } from '@/utills/Toaster';
import React, { useContext, useEffect, useState } from 'react';

const ProductListWithCartDrawer = () => {
  const { cart, setCart }: any = useContext(CartContext);
  const { user }: any = useContext(UserContext);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (user?.email) {
      handleGetCartList();
    }
  }, [user?.email]);

  async function handleGetCartList() {
    const response = await getCartList({ email: user?.email });
    if (response?.results?.cart?.length) {
      setCart(response?.results?.cart);
    }
  }

  const addToCart = async (product: any) => {
    setCart((prevCart: any) => {
      const existingProduct = prevCart.find(
        (item: any) => item.id === product.id,
      );
      if (existingProduct) {
        return prevCart.map((item: any) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    const res = await handleAddCart({
      email: user.email,
      ...product,
      quantity: 1,
    });
  };

  const increaseQuantity = async (productId: any) => {
    const updatedCart = cart.map((item: any) => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    setCart(updatedCart);

    await handleAddCart({
      email: user.email,
      id: productId,
      product_name: cart.find((item: any) => item.id === productId)
        .product_name,
      quantity: 1,
      selling_price: cart.find((item: any) => item.id === productId)
        .selling_price,
      thumbnail: cart.find((item: any) => item.id === productId).thumbnail,
    });
  };

  const decreaseQuantity = async (productId: any) => {
    const updatedCart = cart
      .map((item: any) => {
        if (item.id === productId) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return null;
          }
        }
        return item;
      })
      .filter(Boolean);

    setCart(updatedCart);

    if (updatedCart.find((item: any) => item.id === productId)) {
      await handleAddCart({
        email: user.email,
        id: productId,
        product_name: cart.find((item: any) => item.id === productId)
          .product_name,
        quantity: -1,
        selling_price: cart.find((item: any) => item.id === productId)
          .selling_price,
        thumbnail: cart.find((item: any) => item.id === productId).thumbnail,
      });
    }
  };

  const filteredProducts = products.filter((product: any) =>
    product.product_name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const calculateTotal = () => {
    return cart.reduce(
      (acc: any, item: any) => acc + item.selling_price * item.quantity,
      0,
    );
  };

  const orderSummary = () => {
    return cart.map((item: any) => ({
      product_name: item.product_name,
      quantity: item.quantity,
      total_price: item.selling_price * item.quantity,
    }));
  };

  function handleOrder() {
    toastNotification(
      Status.SUCCESS,
      'Order placed successfully with Cash on Delivery!',
    );
  }

  return (
    <Layout>
      <div className='container mx-auto px-4 py-8'>
        <div className='flex justify-between items-center mb-4'>
          <h1 className='text-3xl font-bold'>Product List</h1>
          <button
            onClick={() => setIsCartOpen(true)}
            className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors'
          >
            Open Cart ({cart.length})
          </button>
        </div>

        <div className='mb-4'>
          <input
            type='text'
            placeholder='Search products...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='w-full border border-gray-300 p-2 rounded-md'
          />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className='bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition-shadow'
            >
              <img
                src={product.thumbnail}
                alt={product.product_name}
                className='w-full h-48 object-cover rounded-md mb-4'
              />
              <h3 className='text-lg font-semibold mb-2'>
                {product.product_name}
              </h3>
              <div className='mb-2'>
                <span className='text-gray-500 line-through mr-2'>
                  ₹{product.price}
                </span>
                <span className='text-red-500 font-bold mr-2'>
                  -₹{product.discount_price} Off
                </span>
                <span className='text-green-600 font-bold'>
                  ₹{product.selling_price}
                </span>
              </div>
              <p className='text-sm mb-2'>
                Stock Status:{' '}
                <span
                  className={
                    product.availabilityStatus === 'Low Stock'
                      ? 'text-red-500'
                      : 'text-green-500'
                  }
                >
                  {product.availabilityStatus}
                </span>
              </p>
              <button
                onClick={() => addToCart(product)}
                className='w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors'
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Cart Side Drawer */}
        <div
          className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg transform ${
            isCartOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out z-50`}
        >
          <div className='p-4 border-b border-gray-200 flex justify-between items-center'>
            <h2 className='text-xl font-bold'>Shopping Cart</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className='text-gray-600 hover:text-gray-900'
            >
              &times;
            </button>
          </div>
          <div className='p-4'>
            {cart.length === 0 ? (
              <p className='text-gray-600'>Your cart is empty.</p>
            ) : (
              <ul>
                {cart.map((item: any) => (
                  <li key={item.id} className='flex items-center mb-4'>
                    <img
                      src={item.thumbnail}
                      alt={item.product_name}
                      className='w-16 h-16 object-cover rounded-md mr-4'
                    />
                    <div className='flex-1'>
                      <h4 className='text-sm font-semibold'>
                        {item.product_name}
                      </h4>
                      <div className='flex items-center space-x-2'>
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className='bg-gray-300 text-black px-2 py-1 rounded-md'
                        >
                          -
                        </button>
                        <span className='font-bold'>{item.quantity}</span>
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className='bg-gray-300 text-black px-2 py-1 rounded-md'
                        >
                          +
                        </button>
                      </div>
                      <p className='text-green-600 font-bold'>
                        ₹{item.selling_price * item.quantity}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {cart.length > 0 && (
            <div className='p-4 border-t border-gray-200'>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  setIsCheckoutOpen(true);
                }}
                className='w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors'
              >
                Continue to Checkout
              </button>
            </div>
          )}
        </div>

        {/* Overlay to close drawer when clicked outside */}
        {isCartOpen && (
          <div
            className='fixed inset-0 bg-black bg-opacity-50 z-40'
            onClick={() => setIsCartOpen(false)}
          ></div>
        )}

        {/* Checkout Modal */}
        {isCheckoutOpen && (
          <div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center'>
            <div className='bg-white w-full max-w-md p-6 rounded-md shadow-lg'>
              <h2 className='text-2xl font-bold mb-4'>Order Summary</h2>
              <ul className='mb-4'>
                {orderSummary().map((item: any) => (
                  <li
                    key={item.product_name}
                    className='flex justify-between mb-2'
                  >
                    <span>
                      {item.product_name} x {item.quantity}
                    </span>
                    <span>₹{item.total_price}</span>
                  </li>
                ))}
              </ul>
              <div className='flex justify-between font-bold text-lg mb-4'>
                <span>Total:</span>
                <span>₹{calculateTotal()}</span>
              </div>
              <button
                onClick={() => {
                  handleOrder();
                  setIsCheckoutOpen(false);
                  setCart([]);
                }}
                className='w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors mb-2'
              >
                Place Order Using Cash
              </button>
              <button
                onClick={() => setIsCheckoutOpen(false)}
                className='w-full bg-gray-300 text-black py-2 rounded-md hover:bg-gray-400 transition-colors'
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductListWithCartDrawer;
