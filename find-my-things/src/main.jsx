import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LoginPage from './LoginPage'
import MyThings from './components/MyThings'
import ItemLocationPage from './pages/ItemLocationPage'
import ConfiguracoesAjuda from './components/ConfiguracoesAjuda'
import './assets/main.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfiguracoesAjuda />
  </StrictMode>,
)
