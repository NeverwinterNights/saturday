import { memo, SVGProps } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    stroke="#E5AC39"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#fbff00"
      fillRule="evenodd"
      d="m15 9-3-7-3 7-7 1 5 4-1 7 6-3 6 3-1-7 5-4-7-1Zm4 2-5-1-2-4-2 4-5 1 4 3-1 5 4-3 4 3-1-5 4-3Z"
      clipRule="evenodd"
    />
  </svg>
)
const StarEmpty = memo(SvgComponent)

export default StarEmpty
