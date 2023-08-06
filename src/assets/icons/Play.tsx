import { memo, SVGProps } from 'react'

export const Play = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="var(--color-light-100)"
    {...props}
  >
    <path d="M8 1.33a6.67 6.67 0 1 0 0 13.34A6.67 6.67 0 0 0 8 1.33Zm0 12A5.33 5.33 0 1 1 8 2.67a5.33 5.33 0 0 1 0 10.66Z" />
    <path d="M8.23 4.97a1.13 1.13 0 0 0-1.24-.2 1.07 1.07 0 0 0-.66.98v4.5a1.07 1.07 0 0 0 .66.98 1.12 1.12 0 0 0 1.24-.2l2.44-2.24a1.07 1.07 0 0 0 0-1.58L8.23 4.97Zm-.56 4.76V6.27L9.54 8 7.67 9.73Z" />

    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)
const Memo = memo(Play)

export { Memo as ReactComponent }
