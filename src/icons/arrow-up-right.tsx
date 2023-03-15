import type { Component, JSX } from 'solid-js';

interface ArrowUpRightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {}

const ArrowUpRightIcon: Component<ArrowUpRightIconProps> = (props) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        {...props}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
        />
      </svg>
    </>
  );
};

export default ArrowUpRightIcon;
