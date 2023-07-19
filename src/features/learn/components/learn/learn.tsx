import { useParams } from 'react-router-dom'

import { Container } from '@/components/ui/container'

export const Learn = () => {
  const { id } = useParams<{ id: string }>()

  return <Container>Learn {id}</Container>
}
