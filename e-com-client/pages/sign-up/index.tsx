import SignUp from '@/components/Forms/SignUp';
import Link from 'next/link';
import React from 'react';

function SignUP() {
  return (
    <div className='w-full flex flex-col min-h-screen gap-y-4 justify-center items-center'>
      <h1 className='text-2xl font-bold'>Ecommerce</h1>
      <Link href={'/'}>
        <h2 className='text-lg'>
          Already have an account? <span className='font-bold'>Login</span>
        </h2>
      </Link>
      <SignUp />
    </div>
  );
}

export default SignUP;
