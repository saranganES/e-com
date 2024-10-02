// components/ErrorComponent.tsx
import React from 'react';
import { FieldError, Merge, FieldErrorsImpl } from 'react-hook-form';

interface ErrorComponentProps {
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ error }) => {
  if (!error) return null;

  let errorMessage: string | any;

  if (typeof error === 'string') {
    errorMessage = error;
  } else if ('message' in error && error.message) {
    errorMessage = error.message;
  } else {
    errorMessage = 'Unknown error';
  }

  return <p className='text-red-500'>{errorMessage}</p>;
};

export default ErrorComponent;
