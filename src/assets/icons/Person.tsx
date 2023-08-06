import { SVGProps } from 'react'

export const Person = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
    <g fill="var(--color-light-100)">
      <path d="M8 7.33A2.67 2.67 0 1 0 8 2a2.67 2.67 0 0 0 0 5.33Zm0-4A1.33 1.33 0 1 1 8 6a1.33 1.33 0 0 1 0-2.67Zm0 5.34a4.67 4.67 0 0 0-4.67 4.66.67.67 0 1 0 1.34 0 3.33 3.33 0 0 1 6.66 0 .67.67 0 1 0 1.34 0A4.67 4.67 0 0 0 8 8.67Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)
