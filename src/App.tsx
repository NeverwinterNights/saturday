import { useState } from 'react'

import { Eye } from './assets/icons/Eye.tsx'
import { Button } from './components/ui/button'
import { CheckboxItem } from './components/ui/checkbox'
import { Dropdown, DropdownItemWithIcon } from './components/ui/dropdown'
import { Input } from './components/ui/input'
import { RadioGroup } from './components/ui/radio-group'
import { Select } from './components/ui/select'
import { Tab, TabsType } from './components/ui/tabs/tab.tsx'
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
    { value: '400', label: '400' },
  ]
  // const value = 'apple'
  const optionsTabs: TabsType[] = [
    { title: 'apple', value: 'apple' },
    { title: 'apple1', value: 'apple1' },
    { title: 'apple2', value: 'apple2' },
    { title: 'apple3', value: 'apple3' },
    { title: 'apple4', value: 'apple4' },
  ]

  return (
    <div style={{ padding: '50px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Tab disabled tabs={optionsTabs} />
        <Tab tabs={optionsTabs} />
        <RadioGroup
          options={optionsPrimary}
          defaultValue={'apple'}
          onValueChange={e => console.log(e)}
        />
        <RadioGroup
          options={optionsPrimary}
          defaultValue={'apple'}
          onValueChange={e => console.log(e)}
          disabled
        />
        <Select
          label={'Select Box'}
          options={optionsPrimary}
          value={valuePrimary}
          onChange={e => setValuePrimary(e)}
          width={'100%'}
        />
        <Select
          variant={'pagination'}
          options={optionsPagination}
          value={valuePagination}
          onChange={e => setValuePagination(e)}
          width={'50px'}
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

      <Dropdown>
        <>
          <DropdownItemWithIcon icon={<Eye />} text="Изменить" onSelect={() => {}} />
          <DropdownItemWithIcon icon={<Eye />} text="Удалить" onSelect={() => {}} />
        </>
      </Dropdown>
    </div>
  )
}
