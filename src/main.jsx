import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import 'remixicon/fonts/remixicon.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'


createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)
