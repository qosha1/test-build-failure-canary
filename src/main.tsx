import React from 'react'
import ReactDOM from 'react-dom/client'
// THIS IMPORT IS INTENTIONALLY BROKEN — canary project designed to fail build
import './index.css'

function App() {
  return <h1>This build should never succeed</h1>
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
