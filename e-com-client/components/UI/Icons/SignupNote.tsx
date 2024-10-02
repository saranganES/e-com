import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSignupNote = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={40}
    height={40}
    fill='none'
    {...props}
  >
    <rect width={40} height={40} fill='url(#signup-note_svg__a)' rx={20} />
    <g fill='#fff' clipPath='url(#signup-note_svg__b)'>
      <path d='M29.2 10.792a2.403 2.403 0 0 0-3.358-.175l-7.35 7.358a.86.86 0 0 0-.242.492l-.325 2.683c-.058.48.4 1.057.925.925l2.683-.325a.86.86 0 0 0 .492-.242l7.35-7.358a2.38 2.38 0 0 0-.175-3.358' />
      <path d='m21.742 23.4-2.692.333a2.536 2.536 0 0 1-2.783-2.791l.333-2.684a2.47 2.47 0 0 1 .708-1.458l4.292-4.3h-9.1A2.51 2.51 0 0 0 10 15v12.5a2.51 2.51 0 0 0 2.5 2.5h11.667a2.507 2.507 0 0 0 2.5-2.5v-8.275L23.2 22.692a2.47 2.47 0 0 1-1.458.708' />
    </g>
    <defs>
      <linearGradient
        id='signup-note_svg__a'
        x1={5.869}
        x2={34.131}
        y1={34.131}
        y2={5.869}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#1751FF' />
        <stop offset={1} stopColor='#5CC5FF' />
      </linearGradient>
      <clipPath id='signup-note_svg__b'>
        <path fill='#fff' d='M10 10h20v20H10z' />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSignupNote;
