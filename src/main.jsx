
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import { StrictMode } from 'react'
import { RouterProvider } from 'react-router/dom'
import router from './routes/Routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
