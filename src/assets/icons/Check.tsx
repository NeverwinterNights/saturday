import { SVGProps, memo } from 'react'

export const Check = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <path fill="#000" d="M4 6h16v12H4z" />
    <path
      fill="#fff"
      d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"
    />
  </svg>
)
const Memo = memo(Check)

export { Memo as ReactComponent }
