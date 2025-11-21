import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LoginPage from './LoginPage'
import './assets/main.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginPage />
  </StrictMode>,
)
