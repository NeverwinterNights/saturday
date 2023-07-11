import { Button } from '../../ui/button'
import { Typography } from '../../ui/typography'

type RenderActionButtonPropType = {
  title?: string
  onclick?: () => void
}

export const RenderActionButton = ({ title = 'Save', onclick }: RenderActionButtonPropType) => {
  return (
    <Button variant="primary" onClick={onclick}>
      <Typography variant="subtitle2">{title}</Typography>
    </Button>
  )
}
