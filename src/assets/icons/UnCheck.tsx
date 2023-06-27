import { SVGProps, memo } from 'react'

const UnCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <path
      fill="#C3C1C7"
      d="M19 5v14H5V5h14Zm0-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"
    />
  </svg>
)
const Memo = memo(UnCheck)

export { Memo as ReactComponent }
