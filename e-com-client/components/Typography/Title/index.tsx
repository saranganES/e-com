import React from 'react';

function Title({ title, color, className, size }: any) {
  return (
    <div className={`max-w-fit 2xl:mx-0 ${className ?? ''}`}>
      <h4
        className={`inter-bold ${size ? size : 'text-xl'} ${
          color ? color : ''
        }`}
      >
        {title}
      </h4>
    </div>
  );
}

export default Title;
