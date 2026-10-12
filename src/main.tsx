import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import './glass.css'
import './reference-refinement.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode><App /></StrictMode>,
)
