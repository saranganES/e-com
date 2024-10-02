import React, { Fragment, useContext, useEffect } from 'react';
import { UserContext } from '../Contexts/UserContext';
import { ACCESS_TOKEN_FIELD_NAME } from '@/constants/common';
import { parseJwt } from '@/utills/Common/commonFn';
import { useRouter } from 'next/router';
import Header from './Header';

function Layout({ children, isAdmin = false }: any) {
  const { user, setUser }: any = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && !user) {
      const jwt = localStorage.getItem(ACCESS_TOKEN_FIELD_NAME) || null;
      if (jwt) {
        try {
          const parsedJwt = parseJwt(jwt);
          setUser({
            ...parsedJwt,
          });
          if (isAdmin) {
            parsedJwt.role === 'Admin' ? '' : router.push('/');
          }
        } catch (e) {
          router.push('/');
        }
      } else {
        router.push('/');
      }
    }
  }, [user, setUser, router]);

  return (
    <Fragment>
      <div className='w-full'>
        <Header />
        <div className='pt-20'>{children}</div>
      </div>
    </Fragment>
  );
}

export default Layout;
