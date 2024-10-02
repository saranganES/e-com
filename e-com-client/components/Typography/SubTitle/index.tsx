import React from 'react';

function SubTitle({ title, color, className }: any) {
  return (
    <div className={`mx-auto 2xl:mx-0 ${className ?? ''}`}>
      <h5 className={`text-xl inter-bold ${color ?? ''}`}>{title}</h5>
    </div>
  );
}

export default SubTitle;
