// import { SVGProps, memo } from 'react'
//
// type IconPropsType = {
//   size: number
// }
//
// export const ArrowLeft = (props: SVGProps<SVGSVGElement> & IconPropsType) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       width="100%"
//       height="100%"
//       fill="none"
//     >
//       <g clipPath="url(#a)">
//         <path fill="#0D0B0C" d="M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41Z" />
//       </g>
//       <defs>
//         <clipPath id="a">
//           <path fill="currentColor" d="M0 0h24v24H0z" />
//         </clipPath>
//       </defs>
//     </svg>
//   )
// }
// const Memo = memo(ArrowLeft)
//
// export { Memo as ReactComponent }

import { IconProps, IconWrapper } from './IconWrapper.tsx'

export const KeyboardArrowLeft = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <g clipPath="url(#prefix__clip0_124_21508)">
            <path
              d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_124_21508">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
