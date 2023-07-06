import { Input } from './components/ui/input'

export function App() {
  return (
    <div style={{ padding: '50px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}></div>
      <form>
        <Input type="email" />
      </form>
    </div>
  )
}
