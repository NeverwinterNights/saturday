// import './index.css'

import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import { I18NProvider } from '@ayub-begimkulov/i18n'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { App } from './app/App.tsx'

import { Toast } from '@/components/ui/toast-container/toast-container.tsx'
import { i18n } from '@/i18n.ts'
import { store } from '@/store/store.ts'
import './styles/index.scss'

createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <I18NProvider i18n={i18n}>
      <BrowserRouter>
        <Toast />
        <App />
      </BrowserRouter>
    </I18NProvider>
  </Provider>
)
