import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import './styles/index.css'

const rootEl = document.getElementById('root')!

// Routes are prerendered to static HTML at build time (scripts/prerender.mjs),
// so attach to that markup instead of throwing it away and re-rendering.
// Falls back to a fresh client render if a route ever ships unprerendered.
if (rootEl.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    rootEl,
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
} else {
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}
