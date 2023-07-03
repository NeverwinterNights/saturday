import { useState } from 'react'

import { Button } from './components/ui/button'
import { CheckboxItem } from './components/ui/checkbox'
import { Input } from './components/ui/input'
import { Select } from './components/ui/select'
import { Typography } from './components/ui/typography'

export function App() {
  const [valuePrimary, setValuePrimary] = useState('apple')
  const [valuePagination, setValuePagination] = useState('100')
  const optionsPrimary = [
    { value: 'apple', label: 'apple' },
    { value: 'apple1', label: 'apple1' },
    { value: 'apple2', label: 'apple2' },
  ]
  const optionsPagination = [
    { value: '100', label: '100' },
    { value: '200', label: '200' },
    { value: '300', label: '300' },
  ]
  // const value = 'apple'

  return (
    <div style={{ padding: '50px' }}>
      <div style={{ display: 'flex' }}>
        <Select
          label={'Select Box'}
          options={optionsPrimary}
          value={valuePrimary}
          onChange={e => setValuePrimary(e)}
        />
        <Select
          variant={'pagination'}
          options={optionsPagination}
          value={valuePagination}
          onChange={e => setValuePagination(e)}
        />
      </div>
      <Typography variant="large" as="h1">
        s Test text
      </Typography>
      <Button variant="primary">
        <Typography color="inherit" variant="subtitle2">
          Button Primary
        </Typography>
      </Button>
      <Button variant="tertiary">
        <Typography color="inherit" variant="subtitle2">
          Button Primary
        </Typography>
      </Button>
      <Typography variant="h2" as="span">
        aaaaaaaaaaaaaaaaa
      </Typography>
      <Typography>aaaaaaaaaaaaaaaaa</Typography>
      <div
        style={{
          width: 100,
          height: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CheckboxItem label={'Click Me'} disabled={false} />
      </div>
      <div style={{ padding: 30 }}>
        <Input
          onChange={() => {}}
          value={''}
          label="Mail"
          placeholder={'Test input'}
          type="password"
        ></Input>
      </div>
      <div style={{ padding: 30 }}>
        <Input onChange={() => {}} value={''} searchInput placeholder={'Test input'}></Input>
      </div>
    </div>
  )
}
