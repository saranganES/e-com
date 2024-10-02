import React from "react";

interface PropsTypes {
  fill?: string;
}

function UpArrow({ fill }: PropsTypes) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill={fill ? fill : "none"}
    >
      <path
        d="M7.6566 15.4041L12.2447 10.826L16.8328 15.4041L18.2422 13.9946L12.2447 7.99714L6.24719 13.9946L7.6566 15.4041Z"
        fill={fill ? fill : "#6C737F"}
      />
    </svg>
  );
}

export default UpArrow;
