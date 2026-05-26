import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'

// Keep Render backend awake — ping every 10 minutes
setInterval(() => {
  fetch(`${import.meta.env.VITE_API_URL}/health`)
    .catch(() => {})
}, 10 * 60 * 1000)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
