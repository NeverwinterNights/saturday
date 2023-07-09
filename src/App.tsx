import { useState } from 'react'

import { SliderComponent } from './components/ui/slider'

export function App() {
  const [value, setValue] = useState<[number, number]>([0, 75])

  return (
    <>
      <div style={{ padding: '50px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}></div>
      </div>
      <div>
        <SliderComponent value={value} setValue={setValue} />
      </div>
    </>
  )
}
