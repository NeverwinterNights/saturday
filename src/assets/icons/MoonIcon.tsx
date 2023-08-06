import { memo, SVGProps } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M9.82 2.24a9 9 0 0 0 11.94 11.94A10 10 0 1 1 9.82 2.24zm8.34.05.84.21v1l-.84.2a2 2 0 0 0-1.45 1.46L16.5 6h-1l-.2-.84a2 2 0 0 0-1.46-1.45L13 3.5v-1l.84-.2A2 2 0 0 0 15.29.83L15.5 0h1l.2.84a2 2 0 0 0 1.46 1.45zm5 5 .84.21v1l-.84.2a2 2 0 0 0-1.45 1.46l-.21.84h-1l-.2-.84a2 2 0 0 0-1.46-1.45L18 8.5v-1l.84-.2a2 2 0 0 0 1.45-1.46L20.5 5h1l.2.84a2 2 0 0 0 1.46 1.45z" />
  </svg>
)

export const Moon = memo(SvgComponent)
