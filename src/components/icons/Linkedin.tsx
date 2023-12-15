import * as React from 'react';

import type { SVGProps } from 'react';

const SvgLinkedin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <path
      fill="#fff"
      d="M1.92 3.364c0-.798.663-1.444 1.48-1.444h17.2c.817 0 1.48.646 1.48 1.444v17.272c0 .797-.663 1.444-1.48 1.444H3.4c-.817 0-1.48-.646-1.48-1.444zm6.228 15.432V9.693H5.123v9.103zM6.636 8.45c1.055 0 1.711-.698 1.711-1.572-.019-.894-.655-1.573-1.69-1.573-1.036 0-1.713.68-1.713 1.573 0 .874.656 1.572 1.672 1.572zm6.184 10.347v-5.084c0-.272.02-.544.101-.738.218-.543.716-1.106 1.552-1.106 1.095 0 1.533.834 1.533 2.059v4.87h3.025v-5.222c0-2.797-1.492-4.098-3.483-4.098-1.605 0-2.325.882-2.728 1.504v.031h-.02l.02-.031V9.693H9.796c.038.854 0 9.103 0 9.103z"
    />
  </svg>
);
export default SvgLinkedin;
