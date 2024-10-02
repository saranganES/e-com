import SubTitle from '@/components/Typography/SubTitle';
import FormField from '@/components/UI/Fields/CustomInput';
import { handleSignIn } from '@/utills/Auth';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';

interface FormValues {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const methods = useForm<FormValues>({
    mode: 'onTouched',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const router = useRouter();

  const { handleSubmit, reset } = methods;

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const res = await handleSignIn({ ...data });
    if (res.status) {
      if (res?.results?.role === 'Admin') {
        router.push('/user-list');
      } else {
        reset();
        router.push('/products');
      }
    }
  };

  return (
    <FormProvider {...methods}>
      <form className='w-3/12' onSubmit={handleSubmit(onSubmit)}>
        <SubTitle title='Sign in' />
        <FormField
          name='email'
          label='Email'
          type='text'
          placeholder='Email Address'
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: 'Enter a valid email address',
            },
          }}
          className='w-full border border-solid border-gray-300 p-2 rounded-md'
          mn='mt-2'
          showLabel={false}
        />

        <FormField
          name='password'
          label='Password'
          type='password'
          placeholder='Password'
          rules={{
            required: 'Password is required',
          }}
          className='w-full border border-solid border-gray-300 p-2 rounded-md'
          mn='my-2'
          showLabel={false}
        />

        <button className='w-full my-2 bg-breadcrumbs-blue bg-black text-white py-2 rounded-md hover:bg-blue-700'>
          Login
        </button>
      </form>
    </FormProvider>
  );
};

export default SignIn;
