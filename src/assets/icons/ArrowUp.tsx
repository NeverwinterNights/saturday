import { memo, SVGProps } from 'react'

const Arrow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={8} height={4} fill="none" {...props}>
    <path
      fill="#fff"
      d="M7.77 3.26a.5.5 0 0 1-.82.38L4.27 1.4 1.6 3.56a.5.5 0 0 1-.7-.07.5.5 0 0 1 .07-.73l3-2.42a.5.5 0 0 1 .63 0l3 2.5a.5.5 0 0 1 .18.42Z"
    />
  </svg>
)

export const ArrowUp = memo(Arrow)
/*<svg width="8" height="4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.23.74a.5.5 0 0 0 .82-.38L3.73 2.6 6.4.44a.5.5 0 0 0 .7.07.5.5 0 0 0-.07.73l-3 2.42a.5.5 0 0 0-.63 0l-3-2.5A.5.5 0 0 0 .22.74Z" fill="#fff"/></svg>*/
