import { FC } from 'react'

import { clsx } from 'clsx'

import s from './image.module.scss'

type PropsType = {
  alt?: string
  src: any
  width?: number
  height?: number
  className?: string
}

export const Image: FC<PropsType> = ({ src, width, height, className }) => {
  return (
    <>
      <div
        className={clsx(s.root, className)}
        style={{
          backgroundImage: `url(${src})`,
          width: `${width}px` || '100px',
          height: `${height}px` || '100px',
        }}
      ></div>
    </>
  )
}
