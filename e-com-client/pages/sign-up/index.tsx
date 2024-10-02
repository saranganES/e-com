import SignUp from '@/components/Forms/SignUp';
import React from 'react';


function SignUP() {
  return (
    <div className='w-full flex flex-col min-h-screen gap-y-4 justify-center items-center'>
      <h1 className='text-2xl font-bold'>Ecommerce</h1>
      <SignUp/>
    </div>
  );
}

export default SignUP;
