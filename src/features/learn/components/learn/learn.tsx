import { useParams } from 'react-router-dom'

import { Container } from '@/components/ui/container'
import { useTranslate } from '@/i18n.ts'

export const Learn = () => {
  const t = useTranslate()
  const { id } = useParams<{ id: string }>()

  return (
    <Container>
      {t('Learn')} {id}
    </Container>
  )
}
