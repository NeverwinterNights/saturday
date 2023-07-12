import { Edit } from '../../../../assets/icons/Edit.tsx'
import { Trash } from '../../../../assets/icons/Trash.tsx'

export const TableCardIcons = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
      <button style={{ cursor: 'pointer' }} onClick={() => alert('ad')}>
        <Edit />
      </button>
      <button style={{ cursor: 'pointer' }} onClick={() => alert('ad')}>
        <Trash />
      </button>
    </div>
  )
}
