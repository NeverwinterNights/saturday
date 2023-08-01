import { memo, SVGProps } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={16}
    height={16}
    fill="#E5AC39"
    stroke="#E5AC39"
    strokeWidth={0}
    viewBox="0 0 473.5 473.5"
    {...props}
  >
    <path
      fill="currentColor"
      stroke="none"
      d="m473 182-162-24-75-147-73 148L0 184l118 116-26 162 146-76 146 75-27-163z"
    />
  </svg>
)
const StarFilled = memo(SvgComponent)

export default StarFilled
