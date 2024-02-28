import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import nProgress from 'nprogress'

import './assets/styles/main.css'

nProgress.start()
nProgress.done()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
