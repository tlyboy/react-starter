import '@unocss/reset/tailwind.css'
import 'uno.css'
import './assets/styles/main.css'
import nProgress from 'nprogress'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

nProgress.start()
nProgress.done()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
