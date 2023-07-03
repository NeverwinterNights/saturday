import { SVGProps, memo } from 'react'

export const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    style={{
      position: 'relative',
      bottom: '2px',
    }}
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="currentColor"
        d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095ZM5 11a6 6 0 1 1 12 0 6 6 0 0 1-12 0Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
const Memo = memo(SearchIcon)

export { Memo as ReactComponent }
