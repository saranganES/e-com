import * as React from "react";
import type { SVGProps } from "react";
const SvgThousand = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={37}
    height={36}
    fill="none"
    {...props}
  >
    <g fill="#0B5CFF" clipPath="url(#thousand_svg__a)">
      <path d="M23.033 20.606a6.65 6.65 0 0 0-3.131-.775h-2.695c-1.165 0-2.26.297-3.207.817-1.992 1.09-3.338 3.169-3.338 5.552v1.964h15.785v-1.965c0-2.413-1.38-4.513-3.415-5.593M30.475 18.086h-2.24a6.6 6.6 0 0 0-3.55 1.025c.491.313.953.68 1.378 1.094 1.646 1.6 2.552 3.73 2.552 5.995v.923H37v-2.688c0-3.5-2.927-6.349-6.526-6.349M8.766 18.086h-2.24C2.927 18.086 0 20.935 0 24.436v2.687h8.494V26.2c0-2.264.907-4.393 2.553-5.994q.616-.599 1.323-1.06a6.6 6.6 0 0 0-3.604-1.059M29.351 8.537h-.035c-2.425.02-4.38 2.06-4.36 4.546.021 2.476 1.992 4.476 4.402 4.476h.035a4.3 4.3 0 0 0 3.124-1.373 4.54 4.54 0 0 0 1.235-3.173c-.02-2.476-1.992-4.476-4.401-4.476M7.642 8.537h-.034c-2.426.02-4.381 2.06-4.36 4.546.02 2.476 1.992 4.476 4.401 4.476h.035a4.3 4.3 0 0 0 3.125-1.373 4.54 4.54 0 0 0 1.235-3.173c-.021-2.476-1.992-4.476-4.402-4.476M18.555 7.836c-2.796 0-5.07 2.338-5.07 5.212 0 2.077 1.188 3.874 2.903 4.711.657.322 1.392.5 2.167.5s1.51-.178 2.167-.5c1.715-.837 2.903-2.634 2.903-4.71 0-2.875-2.274-5.213-5.07-5.213" />
    </g>
    <defs>
      <clipPath id="thousand_svg__a">
        <path fill="#fff" d="M0 0h37v36H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgThousand;
