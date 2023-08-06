import { SVGProps, memo } from 'react'

export const LogOutIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
    <g fill="var(--color-light-100)">
      <path d="M4.667 4a.667.667 0 0 0 0-1.333H3.333a.667.667 0 0 0-.666.666v9.334a.667.667 0 0 0 .666.666h1.334a.666.666 0 1 0 0-1.333H4V4h.667ZM13.88 7.613 12 4.947a.667.667 0 1 0-1.087.773l1.147 1.613H6.667a.667.667 0 0 0 0 1.334H12l-1.2 1.6a.67.67 0 0 0 .133.933.666.666 0 0 0 .934-.133l2-2.667a.667.667 0 0 0 .013-.787Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)
const Memo = memo(LogOutIcon)

export { Memo as ReactComponent }
