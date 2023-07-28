import { Edit } from '@/assets/icons/Edit.tsx'
import { Play } from '@/assets/icons/Play.tsx'
import { Trash } from '@/assets/icons/Trash.tsx'

type TablePackIconsProp = {
  deleteDeck?: () => void
}

export const TablePackIcons = ({ deleteDeck }: TablePackIconsProp) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
      <button style={{ cursor: 'pointer' }} onClick={() => alert('ad')}>
        <Play />
      </button>
      <button style={{ cursor: 'pointer' }} onClick={() => alert('ad')}>
        <Edit />
      </button>
      <button style={{ cursor: 'pointer' }} onClick={deleteDeck}>
        <Trash />
      </button>
    </div>
  )
}
