import { Button } from '../../../ui/button'
import { Typography } from '../../../ui/typography'

import { useTranslate } from '@/i18n.ts'

type CancelButtonPropType = {
  onClick: () => void
}

export const CancelButton = ({ onClick }: CancelButtonPropType) => {
  const t = useTranslate()

  return (
    <Button onClick={onClick} variant="secondary">
      <Typography variant="subtitle2">{t('Cancel')}</Typography>
    </Button>
  )
}
