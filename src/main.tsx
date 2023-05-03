import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App.tsx'
import './stylesheets/index.css'
import '@fontsource/roboto/300.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)