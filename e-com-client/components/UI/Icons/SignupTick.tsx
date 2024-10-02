import * as React from "react";
import type { SVGProps } from "react";
const SvgSignupTick = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <rect width={40} height={40} fill="url(#signup-tick_svg__a)" rx={20} />
    <path
      fill="#fff"
      d="M18.6 28.124a.5.5 0 0 1-.43-.247c-1.662-2.83-6.09-8.857-6.135-8.918a.5.5 0 0 1 .051-.652l1.362-1.346a.5.5 0 0 1 .638-.054l4.41 3.08c2.953-3.785 5.694-6.4 7.498-7.943 2.031-1.737 3.324-2.519 3.378-2.551a.5.5 0 0 1 .257-.071h2.203a.5.5 0 0 1 .333.873c-6.257 5.573-13.062 17.457-13.13 17.576a.5.5 0 0 1-.43.252z"
    />
    <path
      fill="#fff"
      d="M18.506 30.207c-4.963 0-9-4.038-9-9 0-4.963 4.037-9 9-9a9 9 0 0 1 2.924.486.5.5 0 0 1-.325.945 8 8 0 0 0-2.6-.431c-4.41 0-8 3.588-8 8 0 4.41 3.59 8 8 8 4.412 0 8-3.59 8-8a8 8 0 0 0-.162-1.612.5.5 0 0 1 .98-.2c.122.596.183 1.203.183 1.812 0 4.962-4.038 9-9 9"
    />
    <defs>
      <linearGradient
        id="signup-tick_svg__a"
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
export default SvgSignupTick;
