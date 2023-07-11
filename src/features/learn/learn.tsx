import { useParams } from 'react-router-dom'

export const Learn = () => {
  const { id } = useParams<{ id: string }>()

  return <div>Learn {id}</div>
}
