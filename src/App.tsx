import { useState } from 'react'

import { Select } from './components/ui/select'

const optionsPrimary = [
  {
    value: 'apple',
    label: 'Apple',
  },
  {
    value: 'banana',
    label: 'Banana',
  },
  {
    value: 'blueberry',
    label: 'Blueberry',
  },
  {
    value: 'grapes',
    label: 'Grapes',
  },
]

export function App() {
  // const [value, setValue] = useState<[number, number]>([0, 75])
  const [value, setValue] = useState('')

  return (
    <>
      <div style={{ padding: '50px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}></div>
        <div>
          <Select options={optionsPrimary} width={'150px'} value={value} onChange={setValue} />
        </div>
      </div>
    </>
  )
}
