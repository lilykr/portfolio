import * as React from 'react';

import type { SVGProps } from 'react';

const SvgFigma = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 30 15"
    {...props}>
    <path
      fill="#0ACF83"
      d="M4.495 13.458c1.096 0 1.986-.89 1.986-1.985V9.488H4.495a1.986 1.986 0 0 0 0 3.97"
    />
    <path
      fill="#A259FF"
      d="M2.507 7.5c0-1.096.89-1.985 1.985-1.985h1.986v3.973H4.492a1.986 1.986 0 0 1-1.985-1.986z"
    />
    <path
      fill="#F24E1E"
      d="M2.507 3.527c0-1.096.89-1.985 1.985-1.985h1.986v3.973H4.492a1.986 1.986 0 0 1-1.985-1.986z"
    />
    <path fill="#FF7262" d="M6.462 1.542h1.985a1.986 1.986 0 0 1 0 3.97H6.462z" />
    <path
      fill="#1ABCFE"
      d="M10.454 7.5c0 1.096-.89 1.985-1.986 1.985S6.462 8.595 6.462 7.5a1.986 1.986 0 0 1 3.97 0z"
    />
    <path
      fill="#fff"
      d="M12.624 4.833v4.163h.535V7.008h1.288v-.516h-1.288V5.354h1.673v-.52zm3.177.846a.35.35 0 0 0 .35-.35c0-.194-.158-.33-.35-.33a.35.35 0 0 0-.246.6.341.341 0 0 0 .25.105zm-.27.525v2.792h.514V6.204h-.531zm2.524-.083c-.712 0-1.208.625-1.208 1.316 0 .692.5 1.313 1.208 1.313a1.062 1.062 0 0 0 .79-.331v.37a.875.875 0 0 1-.242.598.834.834 0 0 1-.596.25.875.875 0 0 1-.475-.158l-.27.465a1.375 1.375 0 0 0 2.118-1.16V6.2h-.535v.25a1.064 1.064 0 0 0-.79-.33m-.67 1.316a.73.73 0 0 1 .345-.687.734.734 0 0 1 1.117.687.73.73 0 0 1-.346.688.734.734 0 0 1-1.117-.688M21.311 6.667a.583.583 0 0 0-.581.581v1.767h-.536V6.223h.536v.235a.849.849 0 0 1 .691-.337.93.93 0 0 1 .83.473c.208-.292.508-.469.833-.473.61 0 .99.492.992 1.1v1.777h-.536v-1.77a.584.584 0 0 0-.89-.576.583.583 0 0 0-.258.575v1.767h-.514V7.229a.584.584 0 0 0-.582-.581zm5.625-.146a1.293 1.293 0 0 0-.944-.398c-.798 0-1.354.675-1.354 1.458 0 .784.563 1.459 1.354 1.459a1.292 1.292 0 0 0 .944-.398v.316h.535V6.167h-.535zm-1.77 1.083a.888.888 0 1 1 1.77 0 .888.888 0 1 1-1.77 0"
    />
  </svg>
);
export default SvgFigma;