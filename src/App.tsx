import { Button } from './components/ui/button'
import { CheckboxItem } from './components/ui/checkbox'
import { Typography } from './components/ui/typography'

export function App() {
  return (
    <>
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
    </>
  )
}
