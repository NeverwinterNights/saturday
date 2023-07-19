// import './index.css'

// eslint-disable-next-line import/order
import { Toast } from '@/components/ui/toast-container/toast-container.tsx'
// eslint-disable-next-line import/order
import { store } from '@/store/store.ts'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'

import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { App } from './app/App.tsx'
import './styles/index.scss'

createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <Toast />
      <App />
    </BrowserRouter>
  </Provider>
)
