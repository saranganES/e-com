import React, { useContext } from 'react';
import { Avatar } from '../Icons';
import { ACCESS_TOKEN_FIELD_NAME } from '@/constants/common';
import { Status, toastNotification } from '@/utills/Toaster';
import { useRouter } from 'next/router';
import { UserContext } from '@/components/Contexts/UserContext';

const Dropdown = () => {
  const router = useRouter();
  const { setUser }: any = useContext(UserContext);
  const handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN_FIELD_NAME);
    setUser(null);
    router.push('/');
    toastNotification(Status.SUCCESS, 'Logged out Successfully');
  };
  return (
    <div className='group inline-block relative'>
      <button className='outline-none focus:outline-none py-1 bg-white rounded-sm flex items-center'>
        <span className='pr-1 flex-1'>
          <Avatar />
        </span>
      </button>
      <ul className='bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top right-0 top-10 min-w-32'>
        <li
          className='headLi rounded-sm relative text-center  py-2 hover:bg-gray-100 cursor-pointer'
          onClick={() => handleLogout()}
        >
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
