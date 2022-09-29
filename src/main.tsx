import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import LoginPages from './Pages/Auth/views/LoginPages'
import { GestionProveedoresPage } from './Pages/GestionProveedores/GestionProveedoresPage'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>

    {/* <GestionProveedoresPage />    */}
    <LoginPages />
  </React.StrictMode>
)
