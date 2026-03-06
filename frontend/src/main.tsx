// Entry point: mount the React app into the DOM.
// Uses `StrictMode` for highlighting potential problems in development.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Locate the root element and render the top-level `App` component.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
