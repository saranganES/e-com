import React from 'react';
import SignIn from '@/components/Forms/SignIn';

function Home() {
  return (
    <div className='w-full flex flex-col min-h-screen gap-y-4 justify-center items-center'>
      <h1 className='text-2xl font-bold'>Ecommerce</h1>
      <SignIn />
    </div>
  );
}

export default Home;
