import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LoginPage from './LoginPage'
import MyThings from './components/MyThings'
import './assets/main.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyThings />
  </StrictMode>,
)
