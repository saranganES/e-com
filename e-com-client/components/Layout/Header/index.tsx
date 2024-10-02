import { UserContext } from '@/components/Contexts/UserContext';
import Dropdown from '@/components/UI/Dropdown';
import { Profile } from '@/components/UI/Icons';
import { useContext } from 'react';

function Header() {
  const { user }: any = useContext(UserContext);

  return (
    <div className='fixed flex justify-between items-center bg-white w-full px-10 py-3 border-2 z-30'>
      <h3 className='text-xl font-bold font-sans'>Ecommerce</h3>
      <div className='flex justify-end items-center gap-x-4'>
        <Profile />
        <p>{user?.name}</p>
        <Dropdown />
      </div>
    </div>
  );
}

export default Header;
