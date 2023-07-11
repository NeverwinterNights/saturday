import { ReactNode } from 'react'

import { Button } from '../../ui/button'
import { Typography } from '../../ui/typography'

type RenderActionButtonPropType = {
  children?: ReactNode
  onClick?: () => void
}

export const RenderActionButton = ({ children = 'Save', onClick }: RenderActionButtonPropType) => {
  return (
    <Button variant="primary" onClick={onClick}>
      <Typography variant="subtitle2">{children}</Typography>
    </Button>
  )
}
