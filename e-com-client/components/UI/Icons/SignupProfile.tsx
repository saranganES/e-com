import * as React from "react";
import type { SVGProps } from "react";
const SvgSignupProfile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <rect width={40} height={40} fill="url(#signup-profile_svg__a)" rx={20} />
    <path
      fill="#fff"
      d="M20 8a5.807 5.807 0 0 0-5.8 5.8c0 3.2 2.601 5.802 5.8 5.802s5.8-2.603 5.8-5.801S23.2 8 20 8M27.217 23.391c-1.588-1.612-3.693-2.5-5.928-2.5h-2.578c-2.235 0-4.34.888-5.928 2.5a8.45 8.45 0 0 0-2.451 5.965c0 .355.289.644.645.644h18.046a.645.645 0 0 0 .645-.645c0-2.241-.87-4.36-2.45-5.964"
    />
    <defs>
      <linearGradient
        id="signup-profile_svg__a"
        x1={5.869}
        x2={34.131}
        y1={34.131}
        y2={5.869}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1751FF" />
        <stop offset={1} stopColor="#5CC5FF" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgSignupProfile;
