import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import WebGLErrorBoundary from './components/WebGLErrorBoundary.jsx'
import { suppressWebGLErrors } from './utils/suppressWebGLErrors.js'
import './index.css'

// Initialize WebGL error suppression
suppressWebGLErrors();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WebGLErrorBoundary>
      <App />
    </WebGLErrorBoundary>
  </React.StrictMode>,
)
