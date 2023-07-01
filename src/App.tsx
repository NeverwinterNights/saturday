import { Button } from './components/ui/button'
import { CheckboxItem } from './components/ui/checkbox'
import { Input } from './components/ui/input'
import { Typography } from './components/ui/typography'

export function App() {
  return (
    <div style={{ padding: 50 }}>
      <Typography variant="large" as="h1">
        Test text
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
        <CheckboxItem disabled={false} />
      </div>
      <div style={{ padding: 30 }}>
        <Input label="Mail" placeholder={'Test input'} type="password"></Input>
      </div>
      <div style={{ padding: 30 }}>
        <Input searchInput placeholder={'Test input'}></Input>
      </div>
    </div>
  )
}
