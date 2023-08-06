import { memo, SVGProps } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M11 3a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0V3zm0 16a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm1-2a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-9-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2H3zm16 0a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2h-2zm-.7-8.7a1 1 0 0 1 1.4 1.4l-1.56 1.6a1 1 0 0 1-1.42-1.42L18.3 4.3zM5.7 19.7a1 1 0 1 1-1.4-1.4l1.57-1.59a1 1 0 1 1 1.42 1.42L5.7 19.7zm-1.4-14a1 1 0 0 1 1.4-1.4l1.6 1.56A1 1 0 0 1 5.87 7.3L4.3 5.7zm15.4 12.6a1 1 0 0 1-1.4 1.4l-1.59-1.57a1 1 0 0 1 1.42-1.42l1.58 1.58z" />
  </svg>
)

export const Sun = memo(SvgComponent)
