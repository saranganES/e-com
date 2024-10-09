import React from 'react';
import SignIn from '@/components/Forms/SignIn';
import Link from 'next/link';

function Home() {
  return (
    <div className='w-full flex flex-col min-h-screen gap-y-4 justify-center items-center'>
      <h1 className='text-2xl font-bold'>Ecommerce</h1>
      <Link href={'/sign-up'}>
        <h2 className='text-lg'>
          Don't have an account? <span className='font-bold'>Sign Up</span>
        </h2>
      </Link>
      <SignIn />
    </div>
  );
}

export default Home;
