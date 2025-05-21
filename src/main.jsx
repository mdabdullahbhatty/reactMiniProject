
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import { StrictMode } from 'react'
import { RouterProvider } from 'react-router/dom'
import router from './routes/Routes.jsx'
import ProfileContext from './contexts/ProfileContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProfileContext>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </ProfileContext>
  </StrictMode>
)
