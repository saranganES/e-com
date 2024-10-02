import { Fragment } from 'react';
import { Slide, ToastContainer } from 'react-toastify';

function ToastContext({ children }: any) {
  return (
    <Fragment>
      <ToastContainer transition={Slide} theme='light' autoClose={1000} hideProgressBar />
      {children}
    </Fragment>
  );
}

export default ToastContext;
