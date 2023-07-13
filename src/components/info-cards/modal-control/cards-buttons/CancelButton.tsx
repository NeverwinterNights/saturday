import { Button } from '../../../ui/button'
import { Typography } from '../../../ui/typography'

type CancelButtonPropType = {
  onClick: () => void
}

export const CancelButton = ({ onClick }: CancelButtonPropType) => {
  return (
    <Button onClick={onClick} variant="secondary">
      <Typography variant="subtitle2">Cancel</Typography>
    </Button>
  )
}
